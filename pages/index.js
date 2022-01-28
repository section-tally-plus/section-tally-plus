import Head from 'next/head'
import tw, { styled, css } from 'twin.macro'
import Lake from '../public/lake.jpg'

import Header from '../components/Header'

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
        <title>Create Next App</title>
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

      {/* below hasn't been changed, you can see how tailwind is traditionally applied as classe (classNames in react) */}
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </Section>
  )
}
