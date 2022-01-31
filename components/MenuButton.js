import React from 'react'
import tw, { styled } from 'twin.macro'

const Button = tw.button`flex flex-row items-center justify-center rounded-lg gap-1.5`

const Burger = tw.div`w-6 h-auto rounded-full bg-gray-800 flex flex-col gap-1 items-center justify-center`

const Line = tw.div`w-full h-2px bg-white`

const MenuButton = ({ ...rest }) => {
  return (
    <Button {...rest}>
      <div tw="h-full flex flex-col items-center justify-center">
        <p tw="leading-none">menu</p>
      </div>
      <Burger>
        <Line />
        <Line />
        <Line />
      </Burger>
    </Button>
  )
}

export default MenuButton
