import React from 'react'
import { Comment, Modal, Image, Form, Button, Header,
          Segment, Divider, Message, Icon, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


import moment from 'moment'

const ViewPostModal = ({ commentError, text, handleSubmitComment, handleChangeComment, post, addLike }) => {




  return(
    <Modal trigger={<a>Click to view post</a>}>
        <Modal.Content image>
          <Image wrapped size='large' src={post.image} />
          <Modal.Description style={{width: '350px'}}>
              <Link to={`/users/${post.user._id}`}>
                <Header as='h3'>
                  <Image src={post.user.image} avatar/>
                  {post.user.username}
                </Header>
              </Link>

            <Header as='h4'> {post.caption} </Header>
            <Button as='div' labelPosition='right'>
              <Button onClick={(e) => addLike(e, post._id )} color='red'>
                <Icon name='heart' />
                Like
              </Button>
              <Label as='a' basic color='red' pointing='left'>
                {post.likes.length}
              </Label>
            </Button>
            <Divider />

            <Header>Comments</Header>
              <Comment.Group>
                {post.comments.map(comment =>
                  <Comment key={comment._id}>
                    <Comment.Avatar src={comment.user.image} />
                    <Comment.Content>
                      <Comment.Author>
                        <Link to={`users/${comment.user._id}`}> {comment.user.username}</Link>
                      </Comment.Author>

                      <Comment.Metadata>
                        <div>{moment(comment.createdAt).format('dddd HH:mm')}</div>
                      </Comment.Metadata>
                      <Comment.Text>{comment.text}</Comment.Text>
                    </Comment.Content>
                  </Comment>
                )}
                {commentError && <Message
                  error
                  header={commentError}
                  />}
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
