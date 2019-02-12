import React from 'react'
import axios from 'axios'

import { Header, Grid, Container, Segment } from 'semantic-ui-react'

class CitiesEvents extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      events: {}
    }
  }

  componentDidMount(){
    axios.get(`/api/events?city=${this.props.cityName}`)
      .then(res => {
        this.setState({ events: res.data })

      })
  }

  getStyle(event) {
    return {
      width: 5,
      height: 5,
      backgroundImage: `url(${event.largeimageurl})`,
      backgroundSize: 'cover'
    }
  }





  render(){
    if(!this.state.events.results) return null
    return(

      <Container textAlign='left'>
        <Header textAlign='center' as='h2'>
          Events on in {this.props.cityName} today:
        </Header>


        {this.state.events.results.map(event =>
          <Grid.Row key={event.id}>
            <Grid columns={3}>
              <Grid.Column>
                <Segment circular id='circle' style={this.getStyle(event)}>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Header as='h4' textAlign='center'>
                  {event.eventname}
                  <Header.Subheader>
                    {event.venue.name}
                  </Header.Subheader>
                </Header>
              </Grid.Column>
              <Grid.Column>
                {event.openingtimes.doorsopen}-{event.openingtimes.doorsclose}
              </Grid.Column>
            </Grid>
          </Grid.Row>
        )}


      </Container>
    )
  }



}
export default CitiesEvents
