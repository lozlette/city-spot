import React from 'react'
import { Segment, Form, Button, Input, Grid, Divider} from 'semantic-ui-react'

class LoginForm extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const { handleChange } = this.props
    return(
      <Segment color="blue">
        <Form>
          <Grid columns={1} textAlign='center'>
            <Grid.Column width={6}>
              <Divider hidden />
              <Form.Field>
                  <label>Your Email</label>
                  <Input
                    onChange={handleChange}
                    placeholder='Email'
                    name='email'
                  />
              </Form.Field>
              <Form.Field>
                  <label>Your Password</label>
                  <Input
                    onChange={handleChange}
                    type='password'
                    placeholder='Password'
                    name='password'
                  />
              </Form.Field>
              <Divider hidden/>
              <Button content="Log In" primary />
            </Grid.Column>
          </Grid>
        </Form>
      </Segment>
    )
  }

}


export default LoginForm
