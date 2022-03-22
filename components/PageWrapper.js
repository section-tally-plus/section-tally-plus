import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from '../components/AppContext'
import AnimateHeight from 'react-animate-height'

import Sidebar from '../components/Sidebar'
import Results from '../components/Results'
import Profile from '../components/Profile'

const Wrapper = tw.div`relative flex flex-row justify-start w-full min-h-screen`

const PageWrapper = ({ ...rest }) => {
  const { showResults, showProfile } = useContext(AppContext)

  return (
    <AnimateHeight
      height={showResults || showProfile ? 'auto' : 0}
      duration={500}
      easing="ease-in-out"
    >
      <Wrapper>
        <Sidebar />
        {showResults && <Results />}
        {showProfile && <Profile />}
      </Wrapper>
    </AnimateHeight>
  )
}

export default PageWrapper
