import React from 'react'
import axios from 'axios'
import  { Link, Header, Grid, Segment, Card, Image } from 'semantic-ui-react'
class PostsAll extends React.Component {

  constructor() {
    super()

    this.state={}

  }

  getStyle(post) {
    return {
      width: 300,
      height: 300,
      backgroundImage: `url(${post.image})`,
      backgroundSize: 'cover'
    }
  }

  componentDidMount() {
    axios.get('/api/posts')
      .then(res => this.setState({posts: res.data}))
  }

  render() {
    if(!this.state.posts) return null
    console.log(this.state.posts)
    return(
      <div>
        <Header as='h1' className ='All posts'>
        All Posts
        </Header>
        {this.state.posts.map(post =>
          <Card key={post._id}>
            <Image src={post.image} />
            <Card.Content>
              <Card.Header>{post.user.username}</Card.Header>
              <Card.Meta>
                <span className='date'>{post.createdAt}</span>
              </Card.Meta>
              <Card.Description>{post.caption}</Card.Description>
            </Card.Content>
          </Card>
        )}
      </div>
    )
  }
}
export default PostsAll
