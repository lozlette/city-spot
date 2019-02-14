import React from 'react'
import axios from 'axios'
import { Link }  from 'react-router-dom'

import { Header, Divider, Segment, Container, Grid, Reveal, Button} from 'semantic-ui-react'
import VidModal from './VidModal'
import PostsSection from './PostsSection'
import CitiesForecast from './CitiesForecast'
import Auth from '../../lib/Auth'
import LoadingPage from '../common/LoadingPage'


// to be removed later
const style = (city) => {

  if(city) return({
    width: 380,
    height: 380,
    backgroundImage: `url(${city.image})`,
    backgroundSize: 'cover'
  })
  else return({
    width: 380,
    height: 380,
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

  // reload function is passed down several components down, into posts section, used because was having issues
  // reloading cities show page. The entire page is loaded with one axios request which made this particular function
  // useful. To be refactored later
  reload(){
    axios
      .get(`/api/cities/${this.props.match.params.id}`)
      .then(res => this.setState({ city: res.data }))
      .then(() => console.log('hi'))
      .then(() => this.setState({reload: !this.state.reload}))
  }

  componentDidMount(){
    axios
      .get(`/api/cities/${this.props.match.params.id}`)
      .then(res => this.setState({ city: res.data }))


  }



  render(){
    if(!this.state.city) return <LoadingPage/>
    const { city } = this.state
    return(
      <div>
        <Container id='cities-show' textAlign='center'>

          <Divider hidden section/>
          <Header id='cityHeader' size='huge'> {city.name} </Header>
          <Divider />


          {/* Grid with 3 columns. First column is  IMAGE & VIDEO */}
          <Grid stackable columns={3}>
            <Grid.Column width={6}>

              <Reveal animated='move'>
                <Reveal.Content visible>
                  <Segment circular style={style(city)}></Segment>
                </Reveal.Content>

                <Reveal.Content hidden>
                  <Segment inverted circular style={style()}>
                    <Header inverted as='h3'>
                        Population
                      <Header.Subheader>
                        { city.population }
                      </Header.Subheader>
                    </Header>
                    <Header inverted as='h3'>
                        Region
                      <Header.Subheader> {city.continent.name} </Header.Subheader>
                    </Header>
                    <Header inverted as='h3'>
                        Number of user posts about this city:
                      <Header.Subheader> {city.posts.length} </Header.Subheader>
                    </Header>
                  </Segment>
                </Reveal.Content>
              </Reveal>

              <Divider  hidden/>

              <Grid textAlign='center' columns={2}>
                <Grid.Column>
                  <VidModal videoId={city.videoID}/>
                </Grid.Column>
              </Grid>
            </Grid.Column>


            {/*Second Column is displaying weather from DarkSky API */}
            <Grid.Column textAlign='left' width={4}>
              <Divider hidden />

              <CitiesForecast cityName={city.name} />
              <Divider hidden />
              <Link to={`/cities/${city._id}/info`}>
                <div>
                  <Button animated='fade'>
                    <Button.Content visible>Find Events and Eateries in {city.name}</Button.Content>
                    <Button.Content hidden>Here</Button.Content>
                  </Button>
                </div>

              </Link>
            </Grid.Column>


            {/* Third Column Contains the post section, passing down city data, populated on backend
              with posts, comments, likes, userdata.
               */}
            <Grid.Column width={6}>
              <div>
                <PostsSection
                  reload={this.reload}
                  city={city}
                />
              </div>
            </Grid.Column>
          </Grid>



        </Container>
      </div>
    )
  }
}


export default CitiesShow
