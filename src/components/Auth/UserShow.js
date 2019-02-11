import React from 'react'
import axios from 'axios'
import { Segment, Grid, Header, Icon } from 'semantic-ui-react'

class UserShow extends React.Component{
  constructor(props){
    super(props)


    this.state={}
  }

  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ userData: res.data }))
  }

  getStyle(userData) {
    return {
      width: 300,
      height: 300,
      backgroundImage: `url(${userData.image})`,
      backgroundSize: 'cover'
    }
  }

  render(){
    if(!this.state.userData) return null
    console.log(this.state.userData)
    const { userData } = this.state
    return(
      <div>
        <Header as='h1' className='heading'>{userData.username}</Header>
        <Grid columns={2}>
          <Grid.Column width="6" id="divColumn">
            <Segment circular id='circle' style={this.getStyle(userData)}>
            </Segment>
          </Grid.Column>
          <Grid.Column width="9">
            <Segment.Group id="topUserSegment">
              <Segment>
                <Header as="h2">
                  <Icon name="user"></Icon>
                  {userData.firstName}{userData.lastName}
                </Header>
              </Segment>
              <Segment>
                <Header as='h3'> Bio </Header>
              </Segment>
              <Segment.Group>
                <Segment>
                  <p>{userData.bio} </p>
                </Segment>
              </Segment.Group>
            </Segment.Group>
            <Segment.Group>
              <Segment>
                <Header as='h3'>
                  <Icon name="compose"></Icon>
                  Your recent posts:
                </Header>
              </Segment>
              <Segment.Group>
                <Segment>
                User comments to go here...
                </Segment>
              </Segment.Group>
            </Segment.Group>
            <Segment.Group>
              <Segment>
                <Header as='h3'> Your details: </Header>
              </Segment>
              <Segment.Group>
                <Segment>
                  <p>{userData.gender}</p>
                  <p>{userData.email}</p>
                  <p>{userData.continent}</p>
                </Segment>
              </Segment.Group>
            </Segment.Group>
          </Grid.Column>
        </Grid>



      </div>
    )
  }
}




export default UserShow
