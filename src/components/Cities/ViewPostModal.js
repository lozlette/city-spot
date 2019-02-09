import React from 'react'
import { Comment, Modal, Image, Form, Button, Header } from 'semantic-ui-react'

const ViewPostModal = ({ text, handleSubmitComment, handleChangeComment, post }) => {


  return(
    <Modal trigger={<a>Click to view post</a>}>
        <Modal.Header>Authors Name and Image</Modal.Header>

        <Modal.Content image>
          <Image wrapped size='large' src={post.image} />
          <Modal.Description>
            <Header as='h3'> {post.caption} </Header>
            <Header>Comments</Header>
              <Comment.Group>
                {post.comments.map(comment =>
                  <Comment key={comment._id}>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                    <Comment.Content>
                      <Comment.Author as='a'>Username</Comment.Author>
                      <Comment.Metadata>
                        <div>{comment.createdAt}</div>
                      </Comment.Metadata>
                      <Comment.Text>{comment.text}</Comment.Text>
                    </Comment.Content>
                  </Comment>
                )}
                <Form onSubmit={(e) => handleSubmitComment(e, post._id )} reply>
                  <Form.TextArea
                    value={text}
                    onChange={handleChangeComment}
                   />
                  <Button
                    content='Make a comment'
                    name='text'
                    labelPosition='left'
                    icon='edit'
                    primary />
                </Form>
              </Comment.Group>
          </Modal.Description>
        </Modal.Content>
      </Modal>
  )
}



export default ViewPostModal
