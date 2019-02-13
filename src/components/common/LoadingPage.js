import React from 'react'



class LoadingPage extends React.Component {


  constructor() {
    super()

    this.state = {
      loading: true
    }

  }

  componentDidMount() {


    setTimeout(() => this.setState({ loading: true }), 1000 )

  }

  render() {
    const { loading } = this.state

    if(loading) {
      console.count()
      return true
    }

    return (
      null

    )
  }
}

export default LoadingPage
