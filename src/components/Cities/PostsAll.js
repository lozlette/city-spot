import React from 'react'
import axios from 'axios'
import  { Header, Grid, Segment, Card, Image, Container, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'

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
                      <p className='date'>Posted {moment(post.createdAt).format('dddd HH:mm')} <br />
                      from <Link to={`/cities/${post.city._id}`}> {post.city.name} </Link>
                      </p>
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
