import React from 'react'
import tw from 'twin.macro'

import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, ...rest }) => {
  return (
    <>
      <Head>
        <title>SectionTally +</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
