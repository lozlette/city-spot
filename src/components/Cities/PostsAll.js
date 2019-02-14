import React from 'react'
import axios from 'axios'
import  { Link, Header, Grid, Segment, Card, Image, Container, Divider } from 'semantic-ui-react'
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
      <Container>
        <Divider hidden section />
        <Grid columns={5}>
        {this.state.posts.map(post =>
          <Grid.Column key={post._id}>
          <Card style={{ height: '350px' }}>
            <Image src={post.image} />
            <Card.Content>
              <Card.Header>@{post.user.username}</Card.Header>
              <Card.Meta>
                <span className='date'>Posted on: {post.createdAt}</span>
              </Card.Meta>
              <Card.Description>{post.caption}</Card.Description>
            </Card.Content>
            </Card>
          </Grid.Column>
        )}
        </Grid>
        </Container>
      </div>
    )
  }
}
export default PostsAll
