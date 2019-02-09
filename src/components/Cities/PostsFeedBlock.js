import React from 'react'
import { Feed, Divider, Modal, Header, Image, Comment, Form, Button } from 'semantic-ui-react'
import ViewPostModal from './ViewPostModal'


const PostsFeedBlock = ({ city, post, index, handleChangePost, handleChangeComment }) => {
  return(
    <Feed.Event>
      <Feed.Label image={post.image} />
      <Feed.Content>
        <Feed.Date>{post.createdAt}</Feed.Date>
        <Feed.Summary>
          <a>Username</a> created a post about {city.name}.
        </Feed.Summary>

        <ViewPostModal post={post} handleChangeComment={handleChangeComment} />

      </Feed.Content>
      <hr />
    </Feed.Event>
  )
}


export default PostsFeedBlock
