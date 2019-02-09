import React from 'react'
import axios from 'axios'

import { Header, Divider, Segment, Container, Grid, Modal } from 'semantic-ui-react'

const style = (city) => {
  return({
      width: 350,
      height: 350,
      backgroundImage: `url(${city.image})`,
      backgroundSize: 'cover'
    })
}

class CitiesShow extends React.Component{
  constructor(){
    super()
  }

  componentDidMount(){
    axios
      .get('/api/cities/5c5de7b6a282ed27d0aae7b9')
        .then(res => this.setState({ city: res.data }))
  }

  render(){
    if(!this.state) return <h1> Loading... </h1>
    const { city } = this.state
    return(
      <div>
        <Container textAlign='center'>
          <Divider hidden section/>
          <Header id='cityHeader' size='huge'> {city.name} </Header>
          <Divider />


          <Grid columns={2}>
            <Grid.Column width={11} columns={2}>
              <Grid.Column>
                <Segment circular style={style(city)}>

                </Segment>
              </Grid.Column>


              <Grid.Column>
              </Grid.Column>
            </Grid.Column>

            <Grid.Column width={5}>
              <Segment>
                <h1> Posts Section </h1>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}


export default CitiesShow
