import React from 'react'
import { Comment, Modal, Image, Form, Button, Header, Segment, Divider } from 'semantic-ui-react'

const ViewPostModal = ({ text, handleSubmitComment, handleChangeComment, post }) => {


  return(
    <Modal trigger={<a>Click to view post</a>}>

        <Modal.Content image>
          <Image wrapped size='large' src={post.image} />
          <Modal.Description>
            <Header as='h3'>
            <Image src={post.user.image} avatar/>
             {post.user.username} </Header>

            <Header as='h4'> {post.caption} </Header>
            <Divider />

            <Header>Comments</Header>
              <Comment.Group>
                {post.comments.map(comment =>
                  <Comment key={comment._id}>
                    <Comment.Avatar src={comment.user.image} />
                    <Comment.Content>
                      <Comment.Author>{comment.user.username}</Comment.Author>
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
