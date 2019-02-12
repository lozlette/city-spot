import React from 'react'
import axios from 'axios'
import moment from 'moment'


import { Header, Grid, Container } from 'semantic-ui-react'

class CitiesForecast extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      forecast: {}
    }

  }

  componentDidMount(){
    axios.get(`/api/forecast?city=${this.props.cityName}`)
      .then(res => this.setState({ forecast: res.data }))
  }



  render(){
    if(!this.state.forecast.data) return null
    return(
      <Container>
        <Header as='h3'>
          Weekly weather forecast in {this.props.cityName}:
          <Header.Subheader>
            {this.state.forecast.summary}
          </Header.Subheader>
        </Header>


        {this.state.forecast.data.map(day =>
          <Grid.Row key={day.time}>
            <Grid columns={3}>
              <Grid.Column>
                {moment.unix(day.time).format('dddd')}
              </Grid.Column>
              <Grid.Column>
                {Math.round(day.temperatureLow)}ºC
              / {Math.round(day.temperatureHigh)}ºC
              </Grid.Column>
              <Grid.Column>

              </Grid.Column>
            </Grid>
          </Grid.Row>
        )}


      </Container>


    )
  }
}

export default CitiesForecast
