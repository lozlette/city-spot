import React from 'react'
import axios from 'axios'

import { Header, Divider, Segment, Container, Grid, Reveal } from 'semantic-ui-react'
import VidModal from './VidModal'
import PostsSection from './PostsSection'
import CitiesForecast from './CitiesForecast'
import Auth from '../../lib/Auth'

const style = (city) => {

  if(city) return({
    width: 350,
    height: 350,
    backgroundImage: `url(${city.image})`,
    backgroundSize: 'cover'
  })
  else return({
    width: 350,
    height: 350,
    backgroundColor: 'lightblue'
  })
}



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
      .then(() => this.setState({reload: !this.state.reload}))
  }

  componentDidMount(){
    axios
      .get(`/api/cities/${this.props.match.params.id}`)
      .then(res => this.setState({ city: res.data }))


  }



  render(){
    Auth.isAuthenticated()
    if(!this.state.city) return <h1> Loading... </h1>
    console.log(this.state.city.videoID)
    const { city } = this.state
    return(
      <div>
        <Container textAlign='center'>
          <Divider hidden section/>
          <Header id='cityHeader' size='huge'> {city.name} </Header>
          <Divider />


          <Grid columns={3}>
            <Grid.Column width={6}>

              <Reveal animated='move'>
                <Reveal.Content visible>
                  <Segment circular style={style(city)}></Segment>
                </Reveal.Content>

                <Reveal.Content hidden>
                  <Segment circular style={style()}>
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
                  </Segment>
                </Reveal.Content>
              </Reveal>

              <Divider  hidden/>

              <Grid columns={2}>
                <Grid.Column>
                  <VidModal videoId={city.videoID}/>
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
              <CitiesForecast cityName={city.name} />
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
