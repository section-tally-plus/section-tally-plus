import React, { useContext } from 'react'
import tw from 'twin.macro'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AppContext from './AppContext'

const Button = tw.button`hover:opacity-100  opacity-80 text-3xl text-white transition-all duration-300 ease-in-out`

const MenuButton = ({ ...rest }) => {
  const {
    showSidebar,
    toggleSidebar,
    showResults,
    toggleResults,
    showProfile,
    setMobileMenu,
    mobileMenu,
  } = useContext(AppContext)
  return (
    <Button
      {...rest}
      onClick={() => {
        if (window.innerWidth < 1024) {
          setMobileMenu(!mobileMenu)
        } else if (!!showResults || !!showProfile) {
          toggleSidebar(!showSidebar)
        } else {
          toggleResults(true)
          toggleSidebar(true)
        }
      }}
    >
      <FontAwesomeIcon icon={faBars} />
    </Button>
  )
}

export default MenuButton
