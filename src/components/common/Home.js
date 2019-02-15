import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Favicon from 'react-favicon'
import LoadingPage from './LoadingPage'

import  { Grid, Segment, Header, Dropdown, Button, Form, Container } from 'semantic-ui-react'
// const countryOptions = [ { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' } ]
class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }

    this.handleDropDown = this.handleDropDown.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  componentDidMount(){
    axios.get('/api/continents')
      .then(res => this.setState({ continents: res.data }))

    axios.get('/api/cities')
      .then(res => this.setState({ cities: res.data.map(city =>
        ({ key: city.name, value: city._id, text: city.name })
      ) }))
  }

  handleSubmit(){
    this.props.history.push(`/cities/${this.state.chosenCity}`)
  }

  handleDropDown(event, data){
    this.setState({ chosenCity: data.value })
  }

  getStyle() {
    return {
      width: 150,
      height: 150,
      backgroundImage: '#1b1c1d',
      backgroundSize: 'cover'
    }
  }

  render(){
    if(!this.state.cities) return <LoadingPage />
    if(!this.state.continents) return <LoadingPage />
    return(
      <div>
        <Favicon url="https://i2.wp.com/blog.jackhake.com/wp-content/uploads/2017/08/cropped-globe-favicon.png?fit=512%2C512"/>

        <Header className='background'>

          <Grid stackable columns={6}>
            <Grid.Row className='section2'>
              {this.state.continents.map(continent =>
                <Grid.Column key={continent._id}>
                  <Link to={`/continents/${continent._id}`}>
                    <Segment circular id='circle3' style={this.getStyle(continent)}>
                      <Header as='h2' className='segmentHeader'>
                        {continent.name}
                      </Header>
                    </Segment>
                  </Link>
                </Grid.Column>
              )}
            </Grid.Row>
          </Grid>

          <Container className='homepage-margin'>
            <Header as='h1' className='heading city-spot'>City Spot</Header>
            <Header as="h4" className='heading2'>Share the best spots from your travels</Header>
            <Form id="homeForm" onSubmit={this.handleSubmit}>
              <Form.Field>
                <Grid columns={2}>
                  <Grid.Row className='section2'>
                    <Grid.Column>
                      <Dropdown fluid search selection labeled
                        className='search'
                        placeholder={'Find a city'}
                        options={this.state.cities}
                        onChange={this.handleDropDown} />
                    </Grid.Column>
                    <Grid.Column  width={2}>
                      <Button className='button' type='submit'>
                  Search
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Form.Field>
            </Form>
          </Container>
        </Header>




      </div>
    )
  }
}



export default Home
