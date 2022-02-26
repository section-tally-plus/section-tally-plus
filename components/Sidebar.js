import React, { useContext, useState } from 'react'
import tw, { styled, css } from 'twin.macro'
import AppContext from './AppContext'
import { filterOptions } from '../data/FilterData'

import DropdownList from './DropdownList'

const Section = styled.aside(({ showSidebar }) => [
  tw`sticky top-0 left-0 z-50 flex flex-col items-center justify-start w-0 h-screen max-h-screen px-8 py-12 transition-all duration-500 ease-in-out bg-gray-800`,

  showSidebar && tw`w-[20rem]`,
])

const Sidebar = ({ ...rest }) => {
  const { showSidebar } = useContext(AppContext)

  return (
    <Section showSidebar={showSidebar} {...rest}>
      {filterOptions.map(({ title, options }, i) => (
        <DropdownList key={i} title={title} options={options} />
      ))}
    </Section>
  )
}

export default Sidebar
