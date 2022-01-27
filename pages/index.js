import Head from 'next/head'
import tw, { styled, css } from 'twin.macro'

import LinkBoxes from '../components/LinkBoxes'

// Make sure to define styled components outside of the render function

// the easiest way to create a styled component is to use tw. and then the html element you want to style
// note: you will only be able to style in tailwind if you use this method. this isn't usually an issue, esp with tw3.
const Section = tw.section`flex flex-col items-center justify-center min-h-screen py-2`
const Title = tw.h1`text-6xl font-bold`
const TitleLink = tw.a`text-blue-600 hover:underline`

// we can easily mix tw and css in the same styled component by using styled. insted of tw.
const Main = styled.main`
  /* syntax for the tailwind section changes slightly */
  ${tw`flex flex-col items-center justify-center flex-1 w-full px-20 text-center`}

  /* the rest can be written like regular css, here we'll target any immediate p tag children  */
	& > p {
    margin-top: 0.75rem;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  /* we can also use tailwind inside of normal css targeting */
  code {
    ${tw`p-3 font-mono text-lg bg-gray-100 rounded-md`}
  }
`

// the most verbose method for creating a styled component allows variables to be passed in and used when styling.
// you should never need to dynamically add a class to a component and target that class for styling. This is bad
// practice anyway as the dynamic class may end up getting purged and may have to be added to an ignore list.

const Links = styled.div(({ variable, secondVariable }) => [
  // media queries should be avoided. instead, use the prefixes provided by tw wherever possible. "sm, md, lg, xl, 2xl".
  // this allows for more concice code and also for uniform breakpoints accross the app. We may need to add some more
  // breakpoints in the future for really small screens, which we can do in tailwind.config.js.

  tw`sm:w-full flex flex-wrap items-center justify-around max-w-4xl mt-6`,

  // this is how you would apply css to a component conditionally on the value of a variable.
  variable && tw``,

  css`
    /* we could put regular css in here just like before, notice the slight change in syntax. I dont have anything to add here */
  `,

  // conditional styles can also be written in the same way as regular css.
  secondVariable && css``,
])

export default function Home() {
  const links = [
    {
      url: 'https://nextjs.org/docs',
      title: 'Documentation',
      excerpt: 'Find in-depth information about Next.js features and API.',
    },
    {
      url: 'https://nextjs.org/learn',
      title: 'Learn',
      excerpt: 'Learn about Next.js in an interactive course with quizzes!',
    },
    {
      url: 'https://github.com/vercel/next.js/tree/canary/examples',
      title: 'Examples',
      excerpt: 'Discover and deploy boilerplate example Next.js projects.',
    },
    {
      url: 'https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
      title: 'Deploy',
      excerpt:
        'Instantly deploy your Next.js site to a public URL with Vercel.',
    },
  ]

  return (
    <Section>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          Welcome to <TitleLink href="https://nextjs.org">Next.js!</TitleLink>
        </Title>

        <p>
          Get started by editing <code>pages/index.tsx</code>
        </p>

        <Links>
          {links.map(({ url, title, excerpt }, index) => (
            <LinkBoxes key={index} url={url} title={title} excerpt={excerpt} />
          ))}
        </Links>
      </Main>

      {/* below hasn't been changed, you can see how tailwind is traditionally applied as classe (classNames in react) */}
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </footer>
    </Section>
  )
}
