import React from 'react'
import  { Form, Segment, Button, Header, Icon } from 'semantic-ui-react'


const PostFormModal = ({ handleChangePost, handleSubmitPost, postData }) => {

  



  return(

    <Segment>
      <Form onSubmit={handleSubmitPost}>
        <Form.Field>
          <Form.Input
            required
            label='Please add an image link'
            name='image'
            onChange={handleChangePost}
            value={postData.image}
            placeholder='Image Link Here'
          />
        </Form.Field>
        <Form.Field>
          <Form.TextArea
            required
            label='Please add a brief description about your photo'
            placeholder='Write your caption...'
            name='caption'
            value={postData.caption}
            onChange={handleChangePost}
          />
        </Form.Field>
        <Button primary fluid> Submit Your Post </Button>
      </Form>
    </Segment>
  )
}


export default PostFormModal
