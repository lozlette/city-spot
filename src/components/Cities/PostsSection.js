import React from 'react'
import { Segment, Card, Header, Modal, Feed } from 'semantic-ui-react'
import PostsFeedBlock from './PostsFeedBlock'

// {Auth.isAuthenticated() && <Link className="navbar-item" to="/cheeses/new">Add a cheese</Link>}


class PostsSection extends React.Component{


  render(){
    const { posts } = this.props.city
    console.log(posts)
    return(
      <Segment>
        <Feed animated>
          {posts.map((post, index) =>
              <PostsFeedBlock key={post._id} post={post} index={index} />
          )}
        </Feed>
      </Segment>
    )
  }
}



export default PostsSection
