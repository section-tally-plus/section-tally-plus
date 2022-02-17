import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from '../components/AppContext'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'

const MainWrapper = styled.div(({ showSidebar }) => [
  tw`relative right-0 flex flex-col items-center justify-start w-full`,
  showSidebar && tw`w-[calc(100% - 25rem)]`,
])

export default function Home() {
  const { showSidebar } = useContext(AppContext)

  return (
    <Layout>
      <Sidebar />
      <MainWrapper showSidebar={showSidebar}>
        <Hero />
      </MainWrapper>
    </Layout>
  )
}
