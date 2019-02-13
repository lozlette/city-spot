import React from 'react'
import { Segment, Grid, Form, Input, Divider, Button, TextArea, Container, Icon, Header, Message } from 'semantic-ui-react'
import ReactFilestack from 'filestack-react'




const RegisterForm = ({ handleChange, handleSubmit, postData, errors, imageSuccess, changeSuccess }) => {


  const errorMessages = Object.keys(errors).map(errorKey => {
    return errors[errorKey]
  })

  return(
    <Grid columns={1} stackable textAlign='center'>
      <Grid.Column width={8}>
        <Divider hidden />
        <Segment color='blue'>
          <Icon name='add user' size='huge' />
          {imageSuccess && <Message
            success> Image Successfully Uploaded </Message>
          }

          {errorMessages.length >0 && <Message
            error
            header='There was some errors with your submission'
            list={errorMessages}
          />}
          <Form onSubmit={handleSubmit} >


            <Form.Field required>
              <label>Create A Username</label>
              <Input
                onChange={handleChange}
                placeholder='Username'
                required
                name='username'
              />
            </Form.Field>


            <Form.Group widths='equal'>
              <Form.Input
                label='First name'
                required
                name='firstName'
                placeholder='First name'
                onChange={handleChange}
              />

              <Form.Input
                onChange={handleChange}
                required
                label='Last name'
                name='lastName'
                placeholder='Last Name' />
            </Form.Group>

            <Form.Field required>
              <label>Enter Your Email</label>
              <Input
                onChange={handleChange}
                placeholder='Email'
                type='email'
                name='email'
              />
            </Form.Field>
            <Form.Field required>
              <label>Create a Password</label>
              <Input
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

            {!imageSuccess &&
              <Form.Field required>
                <ReactFilestack
                  apikey={ `${process.env.FILE_STACK_KEY}` }
                  mode={'pick'}
                  onSuccess={(res) => {
                    changeSuccess()
                    handleChange({
                      target: {
                        name: 'image',
                        value: res.filesUploaded[0].url
                      }})}}
                  onError={(e) => console.log(e)}
                  buttonText={'Add An Image'}
                  buttonClass={'button is-rounded'}
                />
              </Form.Field>
            }

            <Form.Field required>
              <label>Please Make a Bio</label>
              <TextArea
                name='bio'
                placeholder='Tell Us About Yourself'
                style={{ minHeight: 100 }}
                onChange={handleChange}
              />
            </Form.Field>


            <Button fluid content="Create Your Profile" primary />

          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default RegisterForm
