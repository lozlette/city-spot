import React from 'react'
import { Segment, Card, Header, Feed } from 'semantic-ui-react'
import PostsFeedBlock from './PostsFeedBlock'

// {Auth.isAuthenticated() && <Link className="navbar-item" to="/cheeses/new">Add a cheese</Link>}


class PostsSection extends React.Component{
  constructor(){
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }



  render(){
    const { posts } = this.props.city
    console.log(posts)
    return(
      <Segment>
        <Feed>
          {posts.map((post, index) =>
              <PostsFeedBlock
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
