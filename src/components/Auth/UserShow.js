import React from 'react'
import axios from 'axios'
import { Segment, Grid, Header, Container, Form, Button, Modal, Image, Reveal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ReactFilestack from 'filestack-react'
import Auth from '../../lib/Auth'

class UserShow extends React.Component{
  constructor(props){
    super(props)

    this.changeSuccess = this.changeSuccess.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state={
      imageSuccess: false,
      postData: {
        bio: ''
      },
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
      width: 170,
      height: 170,
      backgroundImage: `url(${userData.image})`,
      backgroundSize: 'cover'
    }
  }

  getHeaderStyle(userData) {
    return {
      height: 250,
      width: 650,
      marginTop: 50,
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
      <div className='user-background'>
        <Container className='user-main'>
          <Container className='header-container'>
            <Segment style={this.getHeaderStyle(userData)}>

              {Auth.isAuthenticated() && (this.state.userData._id === Auth.getUserID()) &&
              <Modal className='header-modal' size='mini' trigger={<Button secondary >Update Cover Photo</Button>}>
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
              }

              <Container className='center-image'>
                <Segment circular style={this.getStyle(userData)}>
                </Segment>
              </Container>
              <Container textAlign='center'>
                <Header as='h4' className='user-padding'>@{this.state.userData.username} </Header>
              </Container>
            </Segment>
          </Container>

          <Container className='user-container'>

            {Auth.isAuthenticated() && (this.state.userData._id === Auth.getUserID()) &&
            <Modal className='header-modal' size='mini' trigger={<Button secondary >Edit Bio</Button>}>
              <Modal.Description>
                <Form className='center-form' onSubmit={this.handleSubmit}>
                  <Form.Field >
                    <Form.TextArea
                      label='Bio'
                      placeholder={this.state.userData.bio}
                      name='bio'
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Button onClick={this.toggleOpen} content="Submit" color='blue' size='tiny' />
                </Form>
              </Modal.Description>
            </Modal>
            }

            <Grid textAlign='center' columns={1}>
              <Grid.Column>
                <Header as='h2' textAlign='center'> Bio </Header>
                {this.state.userData.bio}
              </Grid.Column>
            </Grid>
          </Container>

          <Container className='user-container'>
            <Header as='h2' textAlign='center'> Posts</Header>
            <Grid stackable columns={3}>
              {this.state.userData.posts.map(post => <Grid.Column key={post._id}> <Reveal animated='fade'>
                <Reveal.Content visible> <Link to={`/cities/${post.city._id}`}> <Image size='medium' src={post.image} alt='User post' /> </Link> </Reveal.Content>
                <Reveal.Content hidden>
                  <Header as='h5' textAlign='center'>  {post.city.name} </Header>  </Reveal.Content>
              </Reveal>
              </Grid.Column>)}
            </Grid>
          </Container>
        </Container>

      </div>
    )
  }
}

export default UserShow
