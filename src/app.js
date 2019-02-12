import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './style.scss'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import FlashMessages from './components/common/FlashMessages'
import UserShow from './components/Auth/UserShow'
import CitiesShow from './components/Cities/CitiesShow'
import CitiesIndex from './components/Cities/CitiesIndex'
import ContinentsShow from './components/Continents/ContinentsShow'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'

class App extends React.Component{
  constructor(){
    super()
  }


  render(){
    return(
      <BrowserRouter>
        <main>
          <Navbar />
          <FlashMessages />
          <Switch>

            <Route path="/cities/:id" component={CitiesShow} />
            <Route path="/cities" component={CitiesIndex} />
            <Route path="/users/:id" component={UserShow} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
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
