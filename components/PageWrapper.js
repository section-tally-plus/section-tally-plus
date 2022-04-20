import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from '../components/AppContext'
import AnimateHeight from 'react-animate-height'

import Sidebar from '../components/Sidebar'
import Results from '../components/Results'
import Profile from '../components/Profile'

const Wrapper = tw.div`relative flex flex-row justify-start w-full min-h-screen`
const BodyWrapper = styled.div(({ showSidebar }) => [
  tw`sm:px-8 relative flex flex-col w-full h-full py-12 ml-auto mr-0 transition-all duration-500 ease-in-out`,
  showSidebar && tw`lg:w-[calc(100% - 20rem)]`,
])

const PageWrapper = ({ ...rest }) => {
  const { showResults, showProfile, showSidebar } = useContext(AppContext)

  return (
    <AnimateHeight
      height={showResults || showProfile ? 'auto' : 0}
      duration={500}
      easing="ease-in-out"
    >
      <Wrapper>
        <Sidebar tw="lg:flex hidden" />
        <BodyWrapper showSidebar={showSidebar}>
          {showProfile && <Profile />}
          {showResults && <Results />}
        </BodyWrapper>
      </Wrapper>
    </AnimateHeight>
  )
}

export default PageWrapper
