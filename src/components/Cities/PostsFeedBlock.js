import React from 'react'
import { Feed  } from 'semantic-ui-react'


const PostsFeedBlock = ({ post , index }) => {
  return(
    <Feed.Event>
      <Feed.Label image={post.image} />
      <Feed.Content>
        <Feed.Date>3 days ago</Feed.Date>
        <Feed.Summary>
          <a>Username</a> created a post about this city.
        </Feed.Summary>
        <Feed.Extra text>Click to view more</Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  )
}


export default PostsFeedBlock
