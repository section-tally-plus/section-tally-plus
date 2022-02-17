import React from 'react'
import tw from 'twin.macro'

import Logo from './Logo'
import MenuButton from './MenuButton'
import LoginButton from './LoginButton'

const Component = tw.header`fixed flex flex-row items-center bg-gray-800 shadow-2xl justify-between w-full top-0 left-0 py-4 px-8 text-white z-50`

const Left = tw.div`flex flex-row items-center gap-8`

const Header = ({ ...rest }) => {
  return (
    <Component {...rest}>
      <Left>
        <MenuButton />
        <Logo />
      </Left>
      <LoginButton />
    </Component>
  )
}

export default Header
