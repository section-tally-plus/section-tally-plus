import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from '../components/AppContext'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'
import Results from '../components/Results'

export default function Home() {
  const { showSidebar } = useContext(AppContext)

  return (
    <Layout>
      <Sidebar />
      <Hero />
      <Results />
    </Layout>
  )
}
