import React from 'react'
import axios from 'axios'

class UserShow extends React.Component{
  constructor(props){
    super(props)


    this.state={}
  }

  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ userData: res.data }))
  }

  render(){
    if(!this.state.userData) return null
    const { userData } = this.state
    return(
      <h1>{userData.username}</h1>
    )
  }
}




export default UserShow
