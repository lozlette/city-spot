import React from 'react'
import axios from 'axios'

import { Header, Grid, Segment} from 'semantic-ui-react'


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
    if(this.state.events.results.length === 0) return null
    return(
      <div>
        <Header id='infoHeaderEvent'>
          <Header as='h2' className='heading city-spot'>Events on today in {this.props.cityName}</Header>
        </Header>
        <Grid stackable columns={4}>
          {this.state.events.results.map(event =>

            <Grid.Column key={event.id}>
              <Segment inverted circular id='circle' style={this.getStyle(event)}>
                <Header className='heading4' inverted as='h4'>
                  {event.eventname}
                  <Header.Subheader>
                    {event.venue.name}
                  </Header.Subheader>
                  <Header.Subheader>
                    {event.openingtimes.doorsopen}-{event.openingtimes.doorsclose}
                  </Header.Subheader>
                </Header>
              </Segment>
            </Grid.Column>

          )}
        </Grid>

      </div>





    )
  }



}
export default CitiesEvents
