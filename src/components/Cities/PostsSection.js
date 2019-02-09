import React from 'react'
import { Segment, Card, Header } from 'semantic-ui-react'

// {Auth.isAuthenticated() && <Link className="navbar-item" to="/cheeses/new">Add a cheese</Link>}


class PostsSection extends React.Component{


  render(){
    const { city } = this.props
    return(
      <Segment>
        {city.posts.map(post =>
          <Segment key={post._id}>
            <Header as='h3'> {post.caption} </Header>
            {post.comments.map(comment =>
              <p key={comment._id}> {comment.text} </p>
            )}
          </Segment>
        )}
      </Segment>
    )
  }
}


export default PostsSection
