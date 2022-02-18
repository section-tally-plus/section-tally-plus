import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from '../components/AppContext'

import Sidebar from '../components/Sidebar'
import Results from '../components/Results'
import AnimateHeight from 'react-animate-height'

const Wrapper = tw.div`relative flex flex-row justify-start w-full min-h-screen`

const PageWrapper = ({ ...rest }) => {
  const { showResults } = useContext(AppContext)

  return (
    <AnimateHeight
      height={showResults ? 'auto' : 0}
      duration={500}
      easing="ease-in-out"
    >
      <Wrapper>
        <Sidebar />
        <Results />
      </Wrapper>
    </AnimateHeight>
  )
}

export default PageWrapper
