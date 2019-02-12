import React from 'react'
import { Divider, Button, Grid, Form, Input, Segment, Header, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import Auth from '../../lib/Auth'
import Flash from '../../lib/Flash'
import axios from 'axios'


class ResetPassword extends React.Component{
  constructor(){
    super()

    this.state={
      postData: {
        email: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.goToSendEmail = this.goToSendEmail.bind(this)
  }

  handleChange({ target: {name, value }}) {
    console.log(this.state)
    const postData = {...this.state.postData, [name]: value }
    this.setState({ postData })
  }

  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/resetpassword', this.state.postData)
      .then(res => {
        Auth.setToken(res.data.token)
        Flash.setMessage('success', res.data.message)
        this.props.history.push('/')
      })
      .catch(err => this.setState({ errors: err }))
  }

  goToSendEmail(){
    this.props.history.push('/restepassword/:id')
  }


  render(){
    const { postData } = this.state
    return(
      <Grid columns={1} textAlign='center'>
        <Grid.Column width={5}>
          <Divider hidden/>
          <Segment color="blue">
            <Icon name='user circle' size='huge' />
            <Form onSubmit={this.handleSubmit}>
              <Divider hidden />
              <Form.Field>
                <label>Please enter your Email Address</label>
                <Input
                  value={postData.email}
                  onChange={this.handleChange}
                  placeholder='Email'
                  name='email'
                />
              </Form.Field>
              <Divider hidden/>
              <Button fluid content="Send Email" primary />
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}


export default withRouter(ResetPassword)
