import React from 'react'
import tw from 'twin.macro'

const Item = tw.li`relative flex flex-col justify-end items-start h-auto`
const Heading = tw.p`italic text-gray-600 text-sm`

const ClassItem = ({ href, children, heading, ...rest }) => {
  return (
    <Item {...rest}>
      <Heading>{heading}</Heading>
      {children}
    </Item>
  )
}

export default ClassItem
