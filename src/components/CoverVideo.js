import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/Home Video.mp4'
import LOGO from '../assets/logo.png'

const VideoContainer = styled.div`
width: 100%;

video{
    width: 100%;
    height: 20%;
}

@meda (max-width: 64em) {
  min-width: 40vh;
}
`

const CoverVideo = () => {
  return (
    <VideoContainer>
        <img src={LOGO}/>
    </VideoContainer>
  )
}

export default CoverVideo