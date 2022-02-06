import React from 'react'
import tw, { styled } from 'twin.macro'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = styled.button`
  ${tw`bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative inline-flex items-center justify-center h-10 gap-2 px-4 text-white bg-blue-500 rounded-md`}
`

const MenuButton = ({ ...rest }) => {
  return (
    <Button {...rest}>
      <FontAwesomeIcon icon={faBars} />
      <div tw="h-full flex flex-col items-center justify-center">
        <p tw="leading-none">menu</p>
      </div>
    </Button>
  )
}

export default MenuButton
