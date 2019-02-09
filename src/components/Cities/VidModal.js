import React from 'react'
import { Embed, Modal, Image } from 'semantic-ui-react'


class VidModal extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {videoId} = this.props
    return(
      <Modal basic trigger={<Embed placeholder={`https://img.youtube.com/vi/${videoId}/0.jpg`}/>}>
        <Modal.Content>
          <Embed id={videoId} placeholder={`https://img.youtube.com/vi/${videoId}/0.jpg`} source='youtube' autoplay={true}/>
        </Modal.Content>
      </Modal>

    )
  }

}


export default VidModal
