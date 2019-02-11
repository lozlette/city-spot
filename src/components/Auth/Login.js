import React from 'react'
import { Divider, Button, Grid, Form, Input, Segment, Header, Icon } from 'semantic-ui-react'
import { withRouter } from 'semantic-ui-react'

class Login extends React.Component{
  constructor(){
    super()

    this.state={
        postData:{
          email: '',
          password: ''
        }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: {name, value }}) {
    const postData = {...this.state.postData, [name]: value }
    this.setState({ postData })
  }

  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/login', this.state.postData)
      .then(res => this.props.history.push('/'))
      .catch(err => this.setState({ errors: err }))
    }





  render(){
    const { postData } = this.state
    return(
      <Grid columns={1} textAlign='center'>
        <Grid.Column width={5}>
          <Segment color="blue">
            <Icon name='user circle' size='huge' />
            <Header as='h1'> Login </Header>
            <Form onSubmit={this.handleSubmit}>
              <Divider hidden />
              <Form.Field>
                  <label>Your Email</label>
                  <Input
                    value={postData.email}
                    onChange={this.handleChange}
                    placeholder='Email'
                    name='email'
                  />
              </Form.Field>
              <Form.Field>
                  <label>Your Password</label>
                  <Input
                    value={postData.password}
                    onChange={this.handleChange}
                    type='password'
                    placeholder='Password'
                    name='password'
                  />
              </Form.Field>
              <Divider hidden/>
              <Button fluid content="Log In" primary />
            </Form>
        </Segment>
      </Grid.Column>
    </Grid>
    )
  }
}


export default Login
