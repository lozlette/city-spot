import React from 'react'
import { Button, Divider, Grid, Icon, Segment, Form, Input, TextArea } from 'semantic-ui-react'

class RegForm extends React.Component{
  constructor(props){
    super(props)
  }



  render(){
    const { handleChange, handleSubmit } = this.props
    return(
      <Segment color='blue'>
        <Form onSubmit={handleSubmit} textAlign='center'>
          <Grid columns={2} stackable textAlign='center'>
            <Divider vertical hidden />
            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Form.Field required>
                  <label>Create A Username</label>
                  <Input fluid
                    onChange={handleChange}
                    placeholder='Username'
                    name='username'
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Enter Your Email</label>
                  <Input fluid
                    onChange={handleChange}
                    placeholder='Email'
                    type='email'
                    name='email'
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Create a Password</label>
                  <Input fluid
                    onChange={handleChange}
                    placeholder='Password'
                    type='password'
                    name='password'
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Confirm Your Password</label>
                  <Input
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                      onChange={handleChange}
                      placeholder='Image link'
                    />
                  </Form.Field>

                  <Form.Field>
                    <label>Please Make a Bio</label>
                    <TextArea
                      name='bio'
                      placeholder='Tell Us About Yourself'
                      style={{ minHeight: 100 }}
                      onChange={handleChange}
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

export default RegForm
