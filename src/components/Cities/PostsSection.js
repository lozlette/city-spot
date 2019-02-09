import React from 'react'
import { Segment, Card, Header, Feed } from 'semantic-ui-react'
import PostsFeedBlock from './PostsFeedBlock'

// {Auth.isAuthenticated() && <Link className="navbar-item" to="/cheeses/new">Add a cheese</Link>}


class PostsSection extends React.Component{
  constructor(){
    super()

    this.state={
      postData: {
        image: '',
        caption: '',
      },
      text: ''
    }

    this.handleChangePost = this.handleChangePost.bind(this)
    this.handleChangeComment = this.handleChangeComment.bind(this)
  }

  handleChangePost({ target: {name, value }}) {
    const commentData = {...this.state.postData, [name]: value }
    this.setState({ postData })
  }

  handleChangeComment(e) {
    const text = e.target.value
    this.setState({ text })
  }



  render(){
    const { posts } = this.props.city
    console.log(posts)
    return(
      <Segment>
        <Feed>
          {posts.map((post, index) =>
              <PostsFeedBlock
                handleChangePost={this.handleChangePost}
                handleChangeComment={this.handleChangeComment}
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
