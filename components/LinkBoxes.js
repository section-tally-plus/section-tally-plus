import React from 'react'
import tw, { styled } from 'twin.macro'

const Component = styled.a`
  ${tw`w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 p-6 mt-6 text-left border`}
`
const Title = tw.h3`text-2xl font-bold`
const Excerpt = tw.p`mt-4 text-xl`

const LinkBoxes = ({ title, excerpt, url, ...rest }) => {
  return (
    <Component href={url} {...rest}>
      <Title>{title} &rarr;</Title>
      <Excerpt>{excerpt}</Excerpt>
    </Component>
  )
}

export default LinkBoxes
