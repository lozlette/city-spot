import React from 'react'
import axios from 'axios'
import { Segment, Grid, Header, Icon, Container, Form, Button, Modal } from 'semantic-ui-react'
import ReactFilestack from 'filestack-react'


class UserShow extends React.Component{
  constructor(props){
    super(props)

    this.changeSuccess = this.changeSuccess.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state={
      imageSuccess: false,
      postData: {},
      errors: {}
    }
  }

  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ userData: res.data }))
  }
  reload(){
    console.log('refreshing')
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

  // getHeaderStyle(userData) {
  //   return {
  //     width: 1056,
  //     height: 350,
  //     backgroundImage: `url${userData.headerImage}`,
  //     backgroundSize: 'cover'
  //   }
  // }

  getHeaderStyle(userData) {
    return {
      width: 1056,
      height: 400,
      backgroundImage: `url(${userData.headerImage})`,
      backgroundSize: 'cover'
    }
  }

  changeSuccess(){
    this.setState({ imageSuccess: true })
  }

  handleChange({ target: { name, value }}) {
    const postData = {...this.state.postData, [name]: value }
    const errors= {}
    this.setState({ postData, errors })
      .then(this.props.reload())
  }

  handleSubmit(e){
    e.preventDefault()
    axios.put(`/api/users/${this.props.match.params.id}`, this.state.postData)
      .then(this.reload())
      .catch(err => this.setState({ errors: err.response.data }))
  }

  render(){
    if(!this.state.userData) return null
    console.log(this.state.userData)
    const { userData } = this.state
    return(
      <div>
        <Container className="center-image">
          <Segment style={this.getHeaderStyle(userData)}>
            <Modal className='header-modal' size='mini' trigger={<Button>Update Cover Photo</Button>}>
              <Modal.Description>

                <Form className='center-form' onSubmit={this.handleSubmit}>
                  <Form.Field className='center-image'>
                    {!this.stateimageSuccess &&
                <ReactFilestack
                  apikey={ `${process.env.FILE_STACK_KEY}` }
                  mode={'pick'}
                  onSuccess={(res) => {
                    this.changeSuccess()
                    this.handleChange({
                      target: {
                        name: 'headerImage',
                        value: res.filesUploaded[0].url
                      }})
                  }}
                  onError={(e) => console.log(e)}
                  buttonText={'Choose an Image'}
                  buttonClass={'button is-rounded'}
                />
                    }
                  </Form.Field>
                  <Button onClick={this.toggleOpen} content="Submit" color='blue' size='tiny' />
                </Form>
              </Modal.Description>
            </Modal>
            <Container className="center-image">
              <Segment circular id='circle2' style={this.getStyle(userData)}>
              </Segment>
              <Header as='h6' className='heading'>{userData.firstName} {userData.lastName}</Header>
            </Container>
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
                  {userData.firstName} {userData.lastName}
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
                <Header as='h3'> Details: </Header>
              </Segment>
              <Segment.Group>
                <Segment>
                  <p>Name: {userData.firstName} {userData.lastName}</p>
                  <p>{userData.gender}</p>
                  <p>Email: {userData.email}</p>
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
          Recent posts:
                </Header>
                <div className='user-posts2'>
                  {this.state.userData.posts.map(post => <div key={post._id}> <div> <img src={post.image} alt='User post' id='square' /> </div> <Header as='h3' textAlign='center'> {post.caption} </Header>  <Segment.Group>
                    <Segment>
                      {post.comments.text}
                    </Segment>
                  </Segment.Group></div>)}
                </div>
              </Segment>

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
