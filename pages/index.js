import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from '../components/AppContext'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import PageWrapper from '../components/PageWrapper'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <PageWrapper />
    </Layout>
  )
}
