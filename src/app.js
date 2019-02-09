import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './style.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import UserShow from './components/Auth/UserShow'
import ContinentsShow from './components/Continents/ContinentsShow'
class App extends React.Component{
  constructor(){
    super()
  }


  render(){
    return(
      <BrowserRouter>
        <main>
          <Navbar />

          <Switch>
            <Route path="/users/:id" component={UserShow} />
            <Route path="/continents/:id" component={ContinentsShow} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
