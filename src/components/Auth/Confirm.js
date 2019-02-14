import React from 'react'
import axios from 'axios'

import  { Segment } from 'semantic-ui-react'

import Flash from '../../lib/Flash'

class Confirm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    axios.get(`/api/confirm/${this.props.match.params.code}`)
      .then(() => {
        Flash.setMessage('info', 'Account verified. Please log in.')
        this.props.history.push('/login')
      })
      .catch(() => this.setState({ message: 'Invalid verify link' }))
  }

  render() {
    if(!this.state.message) return null
    return (
      <Segment circular id='circle4'>
        <p>{this.state.message}</p>
      </Segment>
    )
  }
}

export default Confirm
