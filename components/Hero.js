import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import AnimateHeight from 'react-animate-height'
import AppContext from './AppContext'

import SemesterBar from './SemesterBar'

const Section = tw.div`flex flex-col w-full relative h-[66vh]`

const ImageWrapper = styled.div`
  ${tw`relative top-0 flex items-center justify-center w-full h-full shadow-xl`}

  & > img {
    ${tw`filter brightness-90 absolute object-cover w-full h-full`}
    object-postion: 50% 50%;
  }
`

const Hero = ({ ...rest }) => {
  const { semester, showResults } = useContext(AppContext)

  return (
    <AnimateHeight
      height={showResults ? 72 : 'auto'}
      duration={500}
      easing="ease-in-out"
    >
      <Section {...rest}>
        <ImageWrapper>
          <img src={'/lake.jpg'} alt="Lake" />
          <SemesterBar />
        </ImageWrapper>
      </Section>
    </AnimateHeight>
  )
}

export default Hero
