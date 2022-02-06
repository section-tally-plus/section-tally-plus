import React from 'react'
import tw, { styled } from 'twin.macro'

import SemesterBar from './SemesterBar'

const Section = tw.div`flex flex-col w-full h-screen relative`

const ImageWrapper = styled.div`
  ${tw`h-2/3 relative top-0 flex items-center justify-center w-full shadow-xl`}

  & > img {
    ${tw`absolute object-cover w-full h-full`}
    object-postion: 50% 50%;
  }
`

const Hero = ({ ...rest }) => {
  return (
    <Section {...rest}>
      <ImageWrapper>
        <img src={'/lake.jpg'} alt="Lake" />

        <SemesterBar />
      </ImageWrapper>
    </Section>
  )
}

export default Hero
