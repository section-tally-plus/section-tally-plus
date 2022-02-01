import React from 'react'
import tw, { styled } from 'twin.macro'
import { faEllipsisH, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = styled.button`
  ${tw`bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative inline-flex items-center justify-center h-10 gap-2 px-4 text-white bg-blue-500 rounded-md`}
`

const Burger = tw.div`w-6 h-auto rounded-full flex flex-col gap-1 items-center justify-center`

const Line = tw.div`w-full h-2px bg-white`

const MenuButton = ({ ...rest }) => {
  return (
    <Button {...rest}>
      {/* <Burger>
        <Line />
        <Line />
        <Line />
      </Burger> */}
      <FontAwesomeIcon icon={faBars} />
      <div tw="h-full flex flex-col items-center justify-center">
        <p tw="leading-none">menu</p>
      </div>
    </Button>
  )
}

export default MenuButton
