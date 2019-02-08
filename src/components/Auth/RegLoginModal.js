import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import RegForm from './RegForm'
import LoginForm from './LoginForm'


class RegLoginModal extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      postData: {
        username: '',
        email: '',
        password:'',
        passwordConfirmation: '',
        image: '',
        bio: ''
      },
      activeItem: this.props.tab
    }

    this.handleItemClick = this.handleItemClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
  }

  handleChange({ target: {name, value }}) {
    const postData = {...this.state.postData, [name]: value }
    this.setState({ postData })
  }

  render() {
    const { activeItem } = this.state
    return (
      <Container>
        <Menu tabular>
          <Menu.Item name='Sign Up' active={activeItem === 'Sign Up'} onClick={this.handleItemClick} />
          <Menu.Item name='Log In' active={activeItem === 'Log In'} onClick={this.handleItemClick} />
        </Menu>

        {activeItem === 'Sign Up' &&
          <RegForm
            handleChange={this.handleChange}
          />
        }

        {activeItem === 'Log In' &&
          <LoginForm
            handleChange={this.handleChange}
          />
        }
      </Container>

    )
  }
}

export default RegLoginModal
