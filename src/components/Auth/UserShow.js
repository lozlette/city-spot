import React from 'react'
import axios from 'axios'
import { Segment, Grid, Header, Icon, Container } from 'semantic-ui-react'
import ReactFilestack from 'filestack-react'


class UserShow extends React.Component{
  constructor(props){
    super(props)

    this.changeSuccess = this.changeSuccess.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state={
      imageSuccess: false
    }
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

  changeSuccess(){
    console.log('changing state')
    this.setState({ imageSuccess: true })
  }

  handleChange(){
  }

  render(){
    if(!this.state.userData) return null
    console.log(this.state.userData)
    const { userData } = this.state
    return(
      <div>
        <Header as='h6' className='heading'>{userData.firstName} {userData.lastName}</Header>
        {!this.stateimageSuccess &&
          <ReactFilestack
            apikey={ `${process.env.FILE_STACK_KEY}` }
            mode={'pick'}
            onSuccess={() => {
              this.changeSuccess
              this.handleChange
            }}
            onError={(e) => console.log(e)}
            buttonText={'Add A Header Image'}
            buttonClass={'button is-rounded'}
          />
        }
        <Container>
          <Segment circular id='circle2' style={this.getStyle(userData)}>
          </Segment>
        </Container>
        <Grid columns={4}>
          <Grid.Column width="3" id="divColumn">
          </Grid.Column>
          <Grid.Column width="5">
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
                  <p> {userData.bio} </p>
                </Segment>
              </Segment.Group>
            </Segment.Group>
            <Segment.Group>
              <Segment>
                <Header as='h3'> Your details: </Header>
              </Segment>
              <Segment.Group>
                <Segment>
                  <p>{userData.firstName} {userData.lastName}</p>
                  <p>{userData.gender}</p>
                  <p>{userData.email}</p>
                  <p>{userData.continent}</p>
                </Segment>
              </Segment.Group>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column width="5">
            <Segment.Group id="topUserSegment">
              <Segment>
                <Header as='h3'>
                  <Icon name="compose"></Icon>
          Your recent posts:
                </Header>
                <div className='user-posts2'>
                  {this.state.userData.posts.map(post => <div key={post._id}> <img src={post.image} alt='User post' id='square' /> </div>)}
                </div>
              </Segment>
              <Segment.Group>
                <Segment>
          User comments to go here...
                </Segment>
              </Segment.Group>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column width="3" id="divColumn">
          </Grid.Column>
        </Grid>



      </div>
    )
  }
}




export default UserShow
