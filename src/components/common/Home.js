import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Favicon from 'react-favicon'

import  { Grid, Segment, Header, Search } from 'semantic-ui-react'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount(){
    axios.get('/api/continents')
      .then(res => this.setState({ continents: res.data }))
  }

  getStyle(continent) {
    return {
      width: 300,
      height: 300,
      backgroundImage: `url(${continent.image})`,
      border: '1px solid black',
      backgroundSize: 'cover'
    }
  }

  render(){
    if(!this.state.continents) return null
    return(
      <div>
        <Favicon url="https://i2.wp.com/blog.jackhake.com/wp-content/uploads/2017/08/cropped-globe-favicon.png?fit=512%2C512"/>

        <Header className='section'>
          <Header as='h1' className='heading city-spot'>City Spot</Header>
          <Header as="h4" className='heading2'>Share the best spots from your travels</Header>
          <Grid>
            <Grid.Row centered>
              <Search className='search' placeholder={'Find a city'}> </Search>
            </Grid.Row>
          </Grid>

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
