import React from 'react'
import tw from 'twin.macro'

const Button = tw.button`w-12 h-12 flex flex-col bg-purple-900 rounded-lg items-center justify-center gap-1.5`

const Line = tw.div`w-8/12 h-px bg-white -translate-x-0.5 transform`

const MenuButton = ({ ...rest }) => {
  return (
    <Button {...rest}>
      <Line />
      <Line tw="transform translate-x-1" />
      <Line />
    </Button>
  )
}

export default MenuButton
