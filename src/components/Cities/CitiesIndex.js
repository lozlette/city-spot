import React from 'react'
import axios from 'axios'
import { Link }  from 'react-router-dom'

import LoadingPage from '../common/LoadingPage'

import  { Header, Grid, Segment } from 'semantic-ui-react'
class CitiesIndex extends React.Component {

  constructor() {
    super()

    this.state = {}
  }

  getStyle(city) {
    return {
      width: 300,
      height: 300,
      backgroundImage: `url(${city.image})`,
      backgroundSize: 'cover'
    }
  }

  componentDidMount(){
    axios.get('/api/cities')
      .then(res => this.setState({ cities: res.data }))
  }


  render (){
    if(!this.state.cities) return LoadingPage
    console.log(this.state.cities)
    return(
      <div>
        <Grid columns={4}>
          <Grid.Row>
            {this.state.cities.map(city =>
              <Grid.Column key={city._id}>
                <Link to={`/cities/${city._id}`}>
                  <Segment circular id='circle' style={this.getStyle(city)}>
                    <Header as='h2' className='segmentHeader'>
                      {city.name}
                    </Header>
                  </Segment>
                </Link>
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default CitiesIndex
