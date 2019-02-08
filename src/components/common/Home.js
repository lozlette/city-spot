import React from 'react'
import  { Embed } from 'semantic-ui-react'
const Home = () => {
  const videoId = 'lJ87yD_8u3U'
  return(
    <div>
      <h1> Home Page </h1>
        <Embed id={videoId} placeholder={`https://img.youtube.com/vi/${videoId}/0.jpg`} source='youtube' />
    </div>
  )

}



export default Home
