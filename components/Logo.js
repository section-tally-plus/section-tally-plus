import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import AppContext from './AppContext'

const Button = styled.button`
  ${tw`font-oxygen relative flex flex-row items-center justify-center pr-6 text-2xl transition-all duration-300 ease-in-out`}
  &:hover {
    ${tw`text-blue-500`}
    & > svg {
      ${tw`text-white`}
    }
  }
`

const Logo = ({ href, ...rest }) => {
  const { toggleResults, toggleProfile } = useContext(AppContext)
  return (
    <Button
      {...rest}
      onClick={() => {
        toggleResults(false)
        toggleProfile(false)
      }}
    >
      <span>Section</span>
      <span>Tally</span>
      <FontAwesomeIcon
        tw="ml-2 absolute top-0 text-xl right-0 text-blue-500 transition-all duration-300 ease-in-out"
        icon={faPlusSquare}
      />
    </Button>
  )
}

export default Logo
