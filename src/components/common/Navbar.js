import React from 'react'
import { Segment, Menu, Dropdown } from 'semantic-ui-react'


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
    const cityOptions =  [ { key: '_id', value: '_id', text: 'London' }, {key: '_id2', value: '_id2', text: 'Barcelona'}]

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />

          <Menu.Item
            name='View All Cities'
            active={activeItem === 'View All Cities'}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position='right'>
            <Menu.Item
              name='Sign Up'
              active={activeItem === 'Sign Up'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </Segment>


    )
  }
}



export default Navbar
