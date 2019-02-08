import React from 'react'
import { Button, Divider, Grid, Header, Icon, Segment, Form } from 'semantic-ui-react'

class RegForm extends React.Component{
  constructor(){
    super()
  }



  render(){
    return(
      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical> <Icon name="world" size="large" /> </Divider>
          <Form>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
            </Grid.Column>

            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
          </Form>
        </Grid>

      </Segment>
    )
  }
}

export default RegForm
