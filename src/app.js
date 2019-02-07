import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

import Navbar from './components/Navbar'



class App extends React.Component{
  constructor(){
    super()
  }


  render(){
    return(
      <main>
        <NavBar />
        <h1> Hello Team! </h1>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
