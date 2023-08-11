import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/Home Video.mp4'
import LOGO from '../assets/cooke_promo_2.png'

const VideoContainer = styled.div`
width: 100%;

video{
    width: 20%;
    height: 20%;
}

@meda (max-width: 64em) {
  min-width: 40vh;
}
`

const Carousel = () => {
  return (
    <VideoContainer>
        <img src={LOGO} width="500px"/>
    </VideoContainer>
  )
}

export default Carousel