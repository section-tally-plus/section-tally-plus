import React, { useContext } from 'react'
import tw from 'twin.macro'

import Logo from './Logo'
import AppContext from './AppContext'
import MenuButton from './MenuButton'
import LoginButton from './LoginButton'
import ControlBar from './ControlBar'
import MobileMenu from '../components/MobileMenu'

const Component = tw.header`fixed flex z-excessive items-center bg-gray-800 shadow-2xl justify-between w-full top-0 left-0 py-4 px-8 h-[75px]`
const Left = tw.div`flex flex-row items-center gap-8 text-white`

const Header = ({ ...rest }) => {
  const { showResults } = useContext(AppContext)

  return (
    <Component {...rest}>
      <MobileMenu />
      <Left>
        <MenuButton />
        <Logo />
      </Left>
      <LoginButton />
      {showResults && <ControlBar tw="text-white" />}
    </Component>
  )
}

export default Header
