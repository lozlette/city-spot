import React from 'react'
import { Link } from 'react-router-dom'
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
  }

  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
  }


  render() {
    const { activeItem } = this.state
    // const cityOptions =  [ { key: '_id', value: '_id', text: 'London' }, {key: '_id2', value: '_id2', text: 'Barcelona'}]

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Link to={'/'}>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick} />
          </Link>
          <Link to={'/cities'}>
            <Menu.Item
              name='View All Cities'
              active={activeItem === 'View All Cities'}
              onClick={this.handleItemClick2}
            />
          </Link>
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
            <Menu.Item name='My Profile'>
              <Link to={`/users/${Auth.getUserID()}`}>My Profile </Link>
            </Menu.Item>

            }



          </Menu.Menu>
        </Menu>
      </Segment>


    )
  }
}



export default withRouter(Navbar)
