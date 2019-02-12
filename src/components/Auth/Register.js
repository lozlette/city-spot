import React from 'react'
import {  Button, Container, Icon, Segment, Header, Grid, Message } from 'semantic-ui-react'
import axios from 'axios'
import RegisterForm from './RegisterForm'
import { Link, withRouter } from 'react-router-dom'


class Register extends React.Component{
  constructor(){
    super()


    this.state = {
      postData: {},
      errors: {},
      success: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.goToLogin = this.goToLogin.bind(this)
  }



  handleChange({ target: {name, value }}) {
    const postData = {...this.state.postData, [name]: value }
    const errors= {}
    this.setState({ postData, errors })
  }

  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/register', this.state.postData)
      .then(res => this.setState({ success: true }))
      .catch(err => this.setState({ errors: err.response.data }))
    }

  goToLogin(){
    this.props.history.push('/login')
  }


  render(){
    return(
      <Container>
        {this.state.success &&
          <Segment textAlign='center'>
            <Grid stackable textAlign='center' columns={1}>
              <Grid.Row>
                <Header as='h2'icon>
                  <Icon name='check' />
                    Account Successfully Created
                </Header>
              </Grid.Row>
              <Grid.Row>
                <Button
                  content="Continue to Login"
                  primary
                  onClick={this.goToLogin}
                />
              </Grid.Row>
            </Grid>
          </Segment>
        }


        {!this.state.success &&
          <RegisterForm
            errors={this.state.errors}
            postData={this.state.postData}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
        />}
    </Container>
    )
  }
}


export default withRouter(Register)
