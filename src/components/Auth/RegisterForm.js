import React from 'react'
import { Segment, Grid, Form, Input, Divider, Button, TextArea, Container } from 'semantic-ui-react'



const RegisterForm = ({ handleChange, handleSubmit, postData }) => {
  return(
    <Grid columns={1} stackable textAlign='center'>
      <Grid.Column width={8}>
        <Segment color='blue'>
          <Form onSubmit={handleSubmit} >

            <Form.Field required>
              <label>Create A Username</label>
              <Input
                onChange={handleChange}
                placeholder='Username'
                name='username'
              />
            </Form.Field>

            <Form.Group widths='equal'>
              <Form.Input
                label='First name'
                name='firstName'
                placeholder='First name'
                onChange={handleChange}
              />

              <Form.Input
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

            <Divider hidden />
            <Button fluid content="Create Your Profile" primary />

          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default RegisterForm
