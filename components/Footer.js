import React from 'react'
import tw from 'twin.macro'

const Foot = tw.footer`flex items-center justify-center w-full h-24 border-t`
const Link = tw.a`flex items-center justify-center`

const Footer = ({ ...rest }) => {
  return (
    <Foot {...rest}>
      <Link
        className="flex items-center justify-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
      </Link>
    </Foot>
  )
}

export default Footer
