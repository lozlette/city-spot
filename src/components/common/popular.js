import React from 'react'
import axios from 'axios'
import LoadingPage from './LoadingPage'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { Segment, Container, Image, Card, Header, Icon, Grid, Divider} from 'semantic-ui-react'




class Popular extends React.Component{
  constructor(){
    super()

    this.state={}

    this.addLike = this.addLike.bind(this)
  }

  addLike(e, cityId, postId){
    const like = { like: true }
    axios.post(`/api/cities/${cityId}/posts/${postId}/likes`, like)
    .then(() => this.getPosts())
  }

  componentDidMount(){
    this.getPosts()
  }

  getPosts(){
    axios.get('/api/popularposts')
      .then(res => this.setState({popularPosts: res.data}))
      .catch(err => console.log(err.response))
  }



  render(){
    if(!this.state.popularPosts) return <LoadingPage />
    return(
      <Container>
        <Divider hidden section />
        <Grid stackable columns={5}>
          {this.state.popularPosts.map(post =>

            <Grid.Column key={post._id}>
              <Card style={{ minHeight: '350px' }}>
                <Image src={post.image} />
                <Card.Content>
                  <Card.Meta>
                    <p className='date'>Posted {moment(post.createdAt).format('dddd HH:mm')} <br />
                    from <Link to={`/cities/${post.city._id}`}> {post.city.name} </Link>  <br />
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

    )
  }
}



export default Popular
