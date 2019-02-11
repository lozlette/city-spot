import React from 'react'
import { Segment, Grid, Form, Input, Divider, Button } from 'semantic-ui-react'
import axios from 'axios'


class Register extends React.Component{
  constructor(){
    super()


    this.state = {
      postData: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        firstName: '',
        lastName: '',
        gender: '',
        image: '',
        bio: ''
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
    axios.post('/api/register', this.state.postData)
      .then(res => alert(res.status))
      .catch(err => console.log(err))
    }


  render(){
    return(
      <Segment color='blue'>
        <Form onSubmit={this.handleSubmit} >
          <Grid columns={2} stackable textAlign='center'>
            <Divider vertical hidden />
            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Form.Field required>
                  <label>Create A Username</label>
                  <Input fluid
                    onChange={this.handleChange}
                    placeholder='Username'
                    name='username'
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Enter Your Email</label>
                  <Input fluid
                    onChange={this.handleChange}
                    placeholder='Email'
                    type='email'
                    name='email'
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Create a Password</label>
                  <Input fluid
                    onChange={this.handleChange}
                    placeholder='Password'
                    type='password'
                    name='password'
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Confirm Your Password</label>
                  <Input
                    onChange={this.handleChange}
                    placeholder='Password'
                    type='password'
                    name='passwordConfirmation'
                  />
                </Form.Field>
              </Grid.Column>

              <Grid.Column>

                <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    label='First name'
                    name='firstName'
                    placeholder='First name'
                    onChange={this.handleChange}
                  />

                  <Form.Input
                    fluid
                    label='Last name'
                    name='lastName'
                    placeholder='Last Name' />
                </Form.Group>



                <Form.Field>
                  <label>Profile Image</label>
                  <Input size='large'
                    name='image'
                    onChange={this.handleChange}
                    placeholder='Image link'
                  />
                </Form.Field>

                <Form.Field>
                  <label>Please Make a Bio</label>
                  <TextArea
                    name='bio'
                    placeholder='Tell Us About Yourself'
                    style={{ minHeight: 100 }}
                    onChange={this.handleChange}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider hidden />
          <Grid columns={1}>
            <Grid.Row centered>
              <Button content="Create Your Profile" primary />
            </Grid.Row>
          </Grid>
        </Form>

      </Segment>
    )
  }
}


export default Register
