import React from 'react'
import axios from 'axios'

import { Header, Divider, Segment, Container, Grid, Modal, Embed } from 'semantic-ui-react'
import VidModal from './VidModal'
import PostsSection from './PostsSection'
import Auth from '../../lib/Auth'

const style = (city) => {
  return({
    width: 350,
    height: 350,
    backgroundImage: `url(${city.image})`,
    backgroundSize: 'cover'
  })
}


const videoId = ''
//lJ87yD_8u3U


class CitiesShow extends React.Component{
  constructor(){
    super()

    this.state={
      reload: true
    }
    this.reload = this.reload.bind(this)
  }

  reload(){
    axios
      .get(`/api/cities/${this.props.match.params.id}`)
      .then(res => this.setState({ city: res.data }))
      .then(res => this.setState({reload: !this.state.reload}))
  }

  componentDidMount(){
    axios
      .get(`/api/cities/${this.props.match.params.id}`)
      .then(res => this.setState({ city: res.data }))


  }



  render(){
    Auth.isAuthenticated()
    if(!this.state.city) return <h1> Loading... </h1>
    const { city } = this.state
    return(
      <div>
        <Container textAlign='center'>
          <Divider hidden section/>
          <Header id='cityHeader' size='huge'> {city.name} </Header>
          <Divider />


          <Grid columns={3}>
            <Grid.Column width={6}>
              <Segment circular style={style(city)}>
              </Segment>
              <Divider  hidden/>

              <Grid columns={2}>
                <Grid.Column>
                  <VidModal videoId={videoId}/>
                </Grid.Column>
              </Grid>
            </Grid.Column>

            <Grid.Column textAlign='left' width={5}>
              <Divider hidden />
              <Header as='h3'>
                    Population
                <Header.Subheader> 2,500,000 </Header.Subheader>
              </Header>
              <Header as='h3'>
                    Region
                <Header.Subheader> {city.continent.name} </Header.Subheader>
              </Header>
              <Header as='h3'>
                    Number of user posts about this city:
                <Header.Subheader> {city.posts.length} </Header.Subheader>
              </Header>
              <Header as='h3'>
                    Weather in this city:
                <Header.Subheader> Weather summary to go here </Header.Subheader>
              </Header>
            </Grid.Column>

            <Grid.Column width={5}>
              <Segment>
                <PostsSection
                  reload={this.reload}
                  city={city}
                />
              </Segment>
            </Grid.Column>
          </Grid>



        </Container>
      </div>
    )
  }
}


export default CitiesShow
