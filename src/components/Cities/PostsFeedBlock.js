import React from 'react'
import { Feed } from 'semantic-ui-react'
import ViewPostModal from './ViewPostModal'
import { Link } from 'react-router-dom'


const PostsFeedBlock = ({ text, city, post, index, handleChangePost, handleChangeComment, handleSubmitComment }) => {
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
          handleChangeComment={handleChangeComment}
          handleSubmitComment={handleSubmitComment}
        />

      </Feed.Content>
      <hr />
    </Feed.Event>
  )
}


export default PostsFeedBlock
