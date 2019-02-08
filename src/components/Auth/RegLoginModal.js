import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import RegForm from './RegForm'
import LoginForm from './LoginForm'
import axios from 'axios'


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
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
  }

  handleChange({ target: {name, value }}) {
    const postData = {...this.state.postData, [name]: value }
    this.setState({ postData })
  }

  handleSubmit(e){
    e.preventDefault()
    if(activeItem === 'Sign Up'){
      axios.post('/api/register', this.state.postData)
      .then(res => console.log(res))
    } else {
        axios.post('/api/login', this.state.postData)
          .then(res => console.log(res.data))
      }
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
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        }

        {activeItem === 'Log In' &&
          <LoginForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        }
      </Container>

    )
  }
}

export default RegLoginModal
