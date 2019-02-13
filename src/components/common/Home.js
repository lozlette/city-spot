import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Favicon from 'react-favicon'
import LoadingPage from './LoadingPage'

import  { Grid, Segment, Header, Dropdown, Button, Form } from 'semantic-ui-react'
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

  getStyle(continent) {
    return {
      width: 300,
      height: 300,
      backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, .8), rgba(0, 0, 0, .5)), url(${continent.image})`,
      border: '1px solid white',
      backgroundSize: 'cover'
    }
  }

  render(){
    if(!this.state.continents) return <LoadingPage />
    return(
      <div>
        <Favicon url="https://i2.wp.com/blog.jackhake.com/wp-content/uploads/2017/08/cropped-globe-favicon.png?fit=512%2C512"/>

        <Header className='section'>
          <Header as='h1' className='heading city-spot'>City Spot</Header>
          <Header as="h4" className='heading2'>Share the best spots from your travels</Header>

          <Form id="homeForm" onSubmit={this.handleSubmit}>
            <Form.Field>
              <Dropdown fluid search selection labeled
                className='search'
                placeholder={'Find a city'}
                onChange={this.handleDropDown}
                options={this.state.cities}>
              </Dropdown>
            </Form.Field>
            <Button className='button' type='submit'>
             Search
            </Button>
          </Form>

          <Grid columns={6}>
            <Grid.Row className='section2'>
              {this.state.continents.map(continent =>
                <Grid.Column key={continent._id}>
                  <Link to={`/continents/${continent._id}`}>
                    <Segment circular id='circle' style={this.getStyle(continent)}>
                      <Header as='h2' className='segmentHeader'>
                        {continent.name}
                      </Header>
                    </Segment>
                  </Link>
                </Grid.Column>
              )}
            </Grid.Row>
          </Grid>
        </Header>
      </div>
    )
  }
}



export default Home
