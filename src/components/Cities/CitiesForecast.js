import React from 'react'
import axios from 'axios'

import { Header } from 'semantic-ui-react'

class CitiesForecast extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      forecast: {}
    }
  }

  componentDidMount(){
    console.log(!!this.props.cityName)
    axios.get(`/api/forecast?city=${this.props.cityName}`)
      .then(res => this.setState({ forecast: res.data }))
  }



  render(){
    if(!this.state.forecast) return null
    console.log(this.state.forecast)
    return(
      <Header as='h3'>
          Weekly weather forecast:
        <Header.Subheader>
          {this.state.forecast.summary}
        </Header.Subheader>
      </Header>
    )
  }
}

export default CitiesForecast
