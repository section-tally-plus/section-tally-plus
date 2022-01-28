import React from 'react'
import tw from 'twin.macro'

const Section = tw.section``

const Link = tw.a``

const LoginButton = ({ ...rest }) => {
  return (
    <Section {...rest}>
      <Link href="#">Sign In</Link> / <Link href="#">Sign Up</Link>
    </Section>
  )
}

export default LoginButton
