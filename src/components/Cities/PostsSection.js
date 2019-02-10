import React from 'react'
import { Segment, Card, Header, Feed, Modal, Button } from 'semantic-ui-react'
import PostsFeedBlock from './PostsFeedBlock'
import PostFormModal from './PostFormModal'
import Auth from '../../lib/Auth'
import axios from 'axios'

// {Auth.isAuthenticated() && <Link className="navbar-item" to="/cheeses/new">Add a cheese</Link>}


class PostsSection extends React.Component{
  constructor(props){
    super(props)

    this.state={
      postData: {
        image: '',
        caption: '',
      },
      commentText: {
        text: ''
      }
    }

    this.handleChangePost = this.handleChangePost.bind(this)
    this.handleSubmitPost = this.handleSubmitPost.bind(this)
    this.handleChangeComment = this.handleChangeComment.bind(this)
    this.handleSubmitComment = this.handleSubmitComment.bind(this)
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
      .then(this.setState({
        postData: {
          caption: '',
          image: ''
        }
       }))
      .then(this.props.reload)
      .catch(err => alert(err.message))
  }

  handleSubmitComment(e, postId){
    e.preventDefault()
    axios.post(`/api/cities/${this.props.city._id}/posts/${postId}/comments`, this.state.commentText,
      { headers: { Authorization: `Bearer ${Auth.getToken()}` }}
    )
      .then(res => console.log(res))
      .then(this.setState({
        commentText: {
          text: ''
        }
       }))
      .then(this.props.reload)
      .catch(err => alert(err.message))
  }


  render(){
    const { posts } = this.props.city
    return(
      <Segment>
        {Auth.isAuthenticated() &&
            <Modal trigger={<Button fluid size='large' primary>Add a Post</Button>}>
              <PostFormModal
                postData={this.state.postData}
                handleChangePost={this.handleChangePost}
                handleSubmitPost={this.handleSubmitPost}
              />
            </Modal>
        }


        <Feed>
          {posts.map((post, index) =>
              <PostsFeedBlock
                text={this.state.commentText.text}
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




export default PostsSection
