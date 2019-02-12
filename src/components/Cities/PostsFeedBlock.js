import React from 'react'
import { Feed, Button, Icon } from 'semantic-ui-react'
import ViewPostModal from './ViewPostModal'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'


const PostsFeedBlock = ({ text, city, post, index,
                        handleChangePost, handleChangeComment,
                        handleSubmitComment ,commentError, deletePost }) => {
  return(
    <Feed.Event>
      <Feed.Label image={post.image} />
      <Feed.Content>
        <Feed.Date>{post.createdAt}</Feed.Date>
        <Feed.Summary>
          <Link to={`/users/${post.user._id}`}> {post.user.username}</Link> created a post about {city.name}.
        </Feed.Summary>


        <ViewPostModal
          post={post}
          text={text}
          commentError={commentError}
          handleChangeComment={handleChangeComment}
          handleSubmitComment={handleSubmitComment}
        />

      </Feed.Content>

      {Auth.isAuthenticated() && (post.user._id === Auth.getUserID()) &&
        <Button onClick={(e) => deletePost(e, post._id)} negative icon >
          <Icon name='trash' />
        </Button>
      }
      <hr />
    </Feed.Event>
  )
}


export default PostsFeedBlock
