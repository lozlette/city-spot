import React from 'react'
import { Feed, Divider, Modal, Header, Image, Comment, Form, Button } from 'semantic-ui-react'


const PostsFeedBlock = ({ city, post, index }) => {
  return(
    <Feed.Event>
      <Feed.Label image={post.image} />
      <Feed.Content>
        <Feed.Date>{post.createdAt}</Feed.Date>
        <Feed.Summary>
          <a>Username</a> created a post about {city.name}.
        </Feed.Summary>

        <Modal trigger={<a>Click to view post</a>}>
            <Modal.Header>Authors Name and Image</Modal.Header>

            <Modal.Content image>
              <Image wrapped size='large' src={post.image} />
              <Modal.Description>
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
                    <Form reply>
                      <Form.TextArea />
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

      </Feed.Content>
      <hr />
    </Feed.Event>
  )
}


export default PostsFeedBlock
