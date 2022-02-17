import React from 'react'
import tw from 'twin.macro'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = tw.button`hover:opacity-100 opacity-80 text-3xl text-white transition-all duration-300 ease-in-out`

const MenuButton = ({ ...rest }) => {
  return (
    <Button {...rest}>
      <FontAwesomeIcon icon={faBars} />
    </Button>
  )
}

export default MenuButton
