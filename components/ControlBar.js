import React, { useContext } from 'react'
import tw from 'twin.macro'
import AppContext from './AppContext'

const Button = tw.button`absolute bottom-0 flex justify-center right-[15rem] w-[12rem] py-1 transform translate-y-full before:(content[''] border-l-transparent border-l-[2rem] border-r-[2rem] border-r-transparent w-full pointer-events-none h-0 absolute bottom-0 border-t-[2rem] z-[-1] border-t-gray-900) hover:before:border-t-gray-700`

const ControlBar = ({ ...rest }) => {
  const { allCollapsed, setAllCollapsed } = useContext(AppContext)
  return (
    <Button
      {...rest}
      onClick={() => {
        setAllCollapsed(!allCollapsed)
      }}
    >
      {allCollapsed ? 'Restore' : 'Collapse All'}
    </Button>
  )
}

export default ControlBar
