import React from 'react'
import tw, { styled, css } from 'twin.macro'

const Component = styled.li(({ isSelected, bottom, menuOpen }) => [
  tw`relative z-40 items-center justify-between w-full py-2 pl-2 pr-4 font-bold cursor-pointer`,
  tw`after:(content[''] h-px bg-gray-800 bg-opacity-30 w-full absolute left-0 bottom-0)`,

  menuOpen && tw`hover:(bg-blue-800 bg-opacity-25)`,

  isSelected && [
    tw` sticky z-50 bg-blue-300`,

    css`
      bottom: ${bottom}px;
    `,
  ],
])

const Item = ({ isSelected, bottom, value, label, menuOpen, ...rest }) => {
  return (
    <Component
      isSelected={isSelected}
      bottom={bottom}
      menuOpen={menuOpen}
      {...rest}
    >
      {label}
    </Component>
  )
}

export default Item
