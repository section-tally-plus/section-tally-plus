import Head from 'next/head'
import tw, { styled, css } from 'twin.macro'

import Lake from '../public/lake.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Section = tw.section`flex flex-col items-center justify-center min-h-screen py-2`

const Main = styled.main`
  ${tw`flex flex-col items-center justify-start flex-1 w-full text-center`}
`
const Hero = tw.div`flex flex-col w-full h-screen relative`

const ImageWrapper = styled.div`
  ${tw`h-2/3 top-0 w-full shadow-xl`}

  & > img {
    ${tw`object-cover w-full h-full`}
    object-postion: 50% 50%;
  }
`

export default function Home() {
  return (
    <Section>
      <Head>
        <title>SectionTally +</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header />
        <Hero>
          <ImageWrapper>
            <img src={'/lake.jpg'} alt="Lake" />
          </ImageWrapper>
        </Hero>
      </Main>
      <Footer />
    </Section>
  )
}
