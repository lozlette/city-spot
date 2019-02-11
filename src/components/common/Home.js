import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Favicon from 'react-favicon'

import  { Grid, Segment, Header } from 'semantic-ui-react'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {

    }
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
      backgroundSize: 'cover'
    }
  }

  render(){
    if(!this.state.continents) return null
    return(
      <div>
        <Favicon url="https://i2.wp.com/blog.jackhake.com/wp-content/uploads/2017/08/cropped-globe-favicon.png?fit=512%2C512"/>
        <Header as='h1' className='heading'>City Spot</Header>
        <Header as="h4" className='heading2'>Get tips or upload photos and comments on your favourite spot!</Header>
        <Grid columns={3}>
          <Grid.Row>
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
      </div>
    )
  }
}



export default Home
