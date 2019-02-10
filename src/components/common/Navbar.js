import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Segment, Menu, Dropdown, Button, Modal, Icon } from 'semantic-ui-react'
import RegLoginModal from '../Auth/RegLoginModal'
import Auth from '../../lib/Auth'


class Navbar extends React.Component{
  constructor(){
    super()

    this.state={
      activeItem: 'home'
    }
    this.handleItemClick = this.handleItemClick.bind(this)
    this.logout = this.logout.bind(this)
  }

  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
    if(name === 'home')this.props.history.push('/')
    if(name === 'View All Cities')this.props.history.push('/cities')
    if(name === 'My Profile')this.props.history.push(`/users/${Auth.getUserID()}`)
  }

  logout(){
    Auth.removeToken()
    this.props.history.push('/')
  }


  render() {
    const { activeItem } = this.state
    // const cityOptions =  [ { key: '_id', value: '_id', text: 'London' }, {key: '_id2', value: '_id2', text: 'Barcelona'}]

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
            <Menu.Item
              name='home'
              active={this.props.location.pathname === '/'}
              onClick={this.handleItemClick}
              > Home
            </Menu.Item>


            <Menu.Item
              name='View All Cities'
              active={this.props.location.pathname === '/cities'}
              onClick={this.handleItemClick}
            > View All Cities
            </Menu.Item>

          <Menu.Menu position='right'>

            {!Auth.isAuthenticated() && <Menu.Item
              name='Sign Up'>
              <Modal trigger={<Button inverted>Sign Up</Button>} closeIcon>
                <Modal.Content>
                  <RegLoginModal tab="Sign Up"/>
                </Modal.Content>
              </Modal>
            </Menu.Item>}

            {!Auth.isAuthenticated() && <Menu.Item
              name='Log In'>
              <Modal trigger={<Button inverted>Log In</Button>} closeIcon>
                <Modal.Content>
                  <RegLoginModal tab="Log In" />
                </Modal.Content>
              </Modal>
            </Menu.Item>
            }

            {
              Auth.isAuthenticated() &&
            <Menu.Item
              name='My Profile'
              onClick={this.handleItemClick}
            > My Profile
            </Menu.Item>

            }

            {
              Auth.isAuthenticated() &&
              <Menu.Item
                name='Logout'
                onClick={this.logout}
              > Logout
              </Menu.Item>

            }





          </Menu.Menu>
        </Menu>
      </Segment>


    )
  }
}



export default withRouter(Navbar)
