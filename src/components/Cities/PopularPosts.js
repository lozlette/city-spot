import React from 'react'
import axios from 'axios'

class PopularPosts extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidUpdate(){
    axios
      .get('/api/popularposts')
        .then(res => console.log(res))
  }




  render(){
    return(
      <h1> hello world!!Edas </h1>
    )
  }
}


export default PopularPosts
