import React from 'react'
import tw from 'twin.macro'

const Item = tw.li`relative flex flex-col justify-start h-auto `

const ClassItem = ({ href, ...rest }) => {
  return <Item {...rest}></Item>
}

export default ClassItem
