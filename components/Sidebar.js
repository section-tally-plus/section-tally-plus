import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from './AppContext'

const Section = styled.aside(({ showSidebar }) => [
  tw`fixed top-0 left-0 z-50 flex flex-col items-center justify-start w-0 h-screen transition-all duration-500 ease-in-out bg-gray-800`,

  showSidebar && tw`w-SBWIDTH`,
])

const Sidebar = ({ ...rest }) => {
  const { showSidebar } = useContext(AppContext)

  return <Section showSidebar={showSidebar} {...rest}></Section>
}

export default Sidebar
