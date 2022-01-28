import React from 'react'
import tw from 'twin.macro'

import MenuButton from './MenuButton'
import LoginButton from './LoginButton'

const Component = tw.header`fixed flex flex-row items-center bg-gray-800 justify-between w-full top-0 left-0 py-4 px-8 text-white z-50`

const Title = tw.h1``

const Header = ({ ...rest }) => {
  return (
    <Component {...rest}>
      <MenuButton />
      <Title>Section Tally +</Title>
      <LoginButton />
    </Component>
  )
}

export default Header
