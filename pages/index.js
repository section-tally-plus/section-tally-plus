import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from '../components/AppContext'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'
import Results from '../components/Results'
import AnimateHeight from 'react-animate-height'

const Wrapper = styled.div(({ semester }) => [
  tw`relative flex flex-col w-full min-h-screen`,
])

export default function Home() {
  const { showSidebar, semester } = useContext(AppContext)

  return (
    <Layout>
      <Hero />
      <AnimateHeight
        height={!!semester ? 'auto' : 0}
        duration={500}
        easing="ease-in-out"
      >
        <Wrapper semester={semester}>
          <Sidebar />
          <Results />
        </Wrapper>
      </AnimateHeight>
    </Layout>
  )
}
