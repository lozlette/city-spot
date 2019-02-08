import React from 'react'
import axios from 'axios'
import { Segment, Image, Grid, Header, Divider } from 'semantic-ui-react'

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
      <Segment textAlign='center'>
        <Image
          src={userData.image}
          size='medium'
          circular
          centered/>
        <Divider hidden section/>

        <Grid columns={1}>
          <Grid.Column>
             <Header size='huge'> {userData.first} {userData.last} </Header>
             <Header as='h3'> {userData.username} </Header>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}




export default UserShow
