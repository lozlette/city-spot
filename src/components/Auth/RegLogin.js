import React from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'


class RegLoginModal extends React.Component{
  constructor(props){
    super(props)

    
  }


  render(){
    return(
      <Modal trigger={<Button inverted>{this.props.tab}</Button>} closeIcon>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default RegLoginModal
