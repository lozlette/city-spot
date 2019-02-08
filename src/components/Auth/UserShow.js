import React from 'react'
import axios from 'axios'
import { Segment, Image, Grid, Header, Divider, Container, Card } from 'semantic-ui-react'

class UserShow extends React.Component{
  constructor(props){
    super(props)


    this.state={}
  }

  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ userData: res.data }))
  }

  render(){
    if(!this.state.userData) return null
    const { userData } = this.state
    return(
      <div>
        <Segment inverted color='teal' textAlign='center'>
          <Divider hidden/>
          <Image
            src={userData.image}
            size='medium'
            circular
            centered/>
          <Divider hidden />

          <Grid columns={1}>
            <Grid.Column>
               <Header size='huge'> {userData.first} {userData.last} </Header>
               <Header as='h3'> {userData.username} </Header>
            </Grid.Column>
          </Grid>
        </Segment>


      <Segment style={{ minHeight: 300 }} textAlign='center'>
        <Divider section hidden />
        <Container text>
          <Header as='h3'> Bio </Header>
          <p>{userData.bio} </p>
        </Container>
        <Divider hidden/>
        <Container>
          <Header as='h3'> Recent Posts by This User </Header>
          <Grid columns={3}>

          </Grid>
        </Container>

      </Segment>
      </div>
    )
  }
}




export default UserShow
