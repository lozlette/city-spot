import React from 'react'
import { Menu } from 'semantic-ui-react'


class RegLoginModal extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      activeItem: this.props.tab
    }

    this.handleItemClick = this.handleItemClick.bind(this)
  }


  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state
    return (
      <Menu tabular>
        <Menu.Item name='Sign Up' active={activeItem === 'Sign Up'} onClick={this.handleItemClick} />
        <Menu.Item name='Log In' active={activeItem === 'Log In'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default RegLoginModal
