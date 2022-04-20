import React, { useContext } from 'react'
import tw from 'twin.macro'
import axios from 'axios'
import { useUser } from '@auth0/nextjs-auth0'

import Logo from './Logo'
import AppContext from './AppContext'
import MenuButton from './MenuButton'
import LoginButton from './LoginButton'
import ControlBar from './ControlBar'

const Component = tw.header`fixed flex z-excessive items-center bg-gray-800 shadow-2xl justify-between w-full top-0 left-0 py-4 px-8 text-white h-[75px]`

const Left = tw.div`flex flex-row items-center gap-8`

const Header = ({ ...rest }) => {
  const { showResults } = useContext(AppContext)

  return (
    <Component {...rest}>
      <Left>
        <MenuButton />
        <Logo />
      </Left>
      <LoginButton />
      {showResults && <ControlBar />}
    </Component>
  )
}

export default Header
