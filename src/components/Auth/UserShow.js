import React from 'react'
import axios from 'axios'
import { Segment, Grid, Header, Icon, Container, Form, Button, Modal, Divider } from 'semantic-ui-react'
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

  getHeaderStyle(userData) {
    return {
      height: 400,
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
      <div>
        <Container>
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
            <Container className='center-image'>
              <Segment circular id='circle2' style={this.getStyle(userData)}>
              </Segment>
            </Container>
          </Segment>
        </Container>

        <Container className='user-container'>
        </Container>

        <Container className='user-container'>
          <Header as='h3'>
          </Header>
          <div className='user-posts2'>
            {this.state.userData.posts.map(post => <div key={post._id}> <div> <img src={post.image} alt='User post' id='square' /> </div> <Header as='h3' textAlign='center'> {post.caption} </Header>  <Segment.Group>
              <Segment>
                {post.comments.text}
              </Segment>
            </Segment.Group></div>)}
          </div>
        </Container>

      </div>
    )
  }
}




export default UserShow
