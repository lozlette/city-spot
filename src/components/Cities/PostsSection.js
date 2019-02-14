import React from 'react'
import { Segment, Card, Header, Feed, Modal, Button, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import PostsFeedBlock from './PostsFeedBlock'
import PostFormModal from './PostFormModal'
import Auth from '../../lib/Auth'
import Flash from '../../lib/Flash'
import axios from 'axios'


class PostsSection extends React.Component{
  constructor(props){
    super(props)

    this.state={
      message: 'Post Successfully Created',
      finished: false,
      postData: {
        image: '',
        caption: ''
      },
      commentText: {
        text: ''
      },
      commentError: ''
    }

    this.handleChangePost = this.handleChangePost.bind(this)
    this.handleSubmitPost = this.handleSubmitPost.bind(this)
    this.handleChangeComment = this.handleChangeComment.bind(this)
    this.handleSubmitComment = this.handleSubmitComment.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
    this.deletePost = this.deletePost.bind(this)
    this.addLike = this.addLike.bind(this)
  }

  handleChangePost({ target: {name, value }}) {
    console.log(name)
    const postData = {...this.state.postData, [name]: value }
    this.setState({ postData })
  }

  handleChangeComment(e) {
    const text = e.target.value
    this.setState({
      commentText: { text }
    })
  }

  handleSubmitPost(e){
    e.preventDefault()
    axios
      .post(`/api/cities/${this.props.city._id}/posts`, this.state.postData,
        { headers: { Authorization: `Bearer ${Auth.getToken()}` }}
      )
      .then(res => {
        this.setState({
          modalOpen: false,
          postData: {
            caption: '',
            image: ''
          }
        })
      })
      .then(this.props.reload)
      .catch(err => alert(err.message))
  }

  deletePost(e, postId){
    axios.delete(`/api/cities/${this.props.match.params.id}/posts/${postId}`)
      .then(() => this.props.reload())
      .catch(err => console.log(err.response))
  }

  addLike(e, postId){
    const cityId = this.props.match.params.id
    const like = { like: true }
    axios.post(`/api/cities/${cityId}/posts/${postId}/likes`, like)
      .then(res => console.log(res))
      .then(this.props.reload())
  }

  toggleOpen(){
    if(this.state.modalOpen)this.setState({ modalOpen: false })
    if(!this.state.modalOpen)this.setState({ modalOpen: true })
  }

  handleErrors(response){
    if(response.status === 401)this.setState({ commentError: 'You are not logged in' })
    this.props.reload()
  }

  handleSubmitComment(e, postId){
    e.preventDefault()
    axios.post(`/api/cities/${this.props.city._id}/posts/${postId}/comments`, this.state.commentText,
      { headers: { Authorization: `Bearer ${Auth.getToken()}` }}
    )
      .then(this.setState({
        commentText: {
          text: ''
        }
      }))
      .then(() => this.props.reload())
      .catch(err => this.handleErrors(err.response))
  }


  render(){
    const { posts } = this.props.city
    return(
      <Segment>
        {Auth.isAuthenticated() &&
            <Modal
              open={this.state.modalOpen}
              basic
              trigger={<Button onClick={this.toggleOpen}
                fluid size='large'
                primary>Add a Post</Button>}>
              <PostFormModal
                toggleOpen={this.toggleOpen}
                postData={this.state.postData}
                handleChangePost={this.handleChangePost}
                handleSubmitPost={this.handleSubmitPost}
              />
            </Modal>
        }


        <Feed id="feed">
          {posts.slice().reverse().map((post, index) =>
            <PostsFeedBlock
              addLike={this.addLike}
              deletePost={this.deletePost}
              text={this.state.commentText.text}
              commentError={this.state.commentError}
              handleChangePost={this.handleChangePost}
              handleChangeComment={this.handleChangeComment}
              handleSubmitComment={this.handleSubmitComment}
              city={this.props.city}
              key={post._id}
              post={post}
              index={index}
            />
          )}
        </Feed>
      </Segment>
    )
  }
}




export default withRouter(PostsSection)
