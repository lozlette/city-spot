import React from 'react'
import axios from 'axios'
import  { Header, Grid, Segment, Card, Image, Container, Divider, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'

class PostsAll extends React.Component {

  constructor() {
    super()

    this.state={}
    this.addLike = this.addLike.bind(this)

  }

  addLike(e, cityId, postId){
    const like = { like: true }
    axios.post(`/api/cities/${cityId}/posts/${postId}/likes`, like)
    .then(() => this.getPosts())
  }

  getStyle(post) {
    return {
      width: 300,
      height: 300,
      backgroundImage: `url(${post.image})`,
      backgroundSize: 'cover'
    }
  }

  getPosts(){
    axios.get('/api/posts')
      .then(res => this.setState({posts: res.data}))
  }

  componentDidMount() {
    this.getPosts()
  }

  render() {
    if(!this.state.posts) return null
    return(
      <div>
        <Container>
          <Divider hidden section />
          <Grid stackable columns={5}>
            {this.state.posts.map(post =>
              <Grid.Column key={post._id}>
                <Card style={{ minHeight: '350px' }}>
                  <Image src={post.image} />
                  <Card.Content>
                    <Card.Meta>
                      <p className='date'>Posted {moment(post.createdAt).format('dddd HH:mm')} <br />
                        from <Link to={`/cities/${post.city._id}`}> {post.city.name} </Link> <br />
                        by <Link to={`/users/${post.user._id}`}> @{post.user.username} </Link>
                      </p>
                    </Card.Meta>
                    <Card.Description>{post.caption}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a onClick={(e) => this.addLike(e, post.city._id, post._id)}>
                      <Icon name='heart' color='red'/>
                      {post.likes.length}
                    </a>
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
