import React, { useContext, useState } from 'react'
import tw, { styled, css } from 'twin.macro'
import AppContext from './AppContext'
import { filterOptions } from '../data/FilterData'

import DropdownList from './DropdownList'

const Section = styled.aside(({ showSidebar }) => [
  tw`fixed bottom-0 left-0 z-50 flex flex-col items-center justify-start w-0 h-[calc(100vh - 75px)] max-h-screen py-12 overflow-x-hidden bg-gray-800`,

  showSidebar && tw`w-[20rem] px-8`,
])

const DropdownWrapper = tw.div`flex flex-col relative w-full gap-3`

const Sidebar = ({ ...rest }) => {
  const { showSidebar } = useContext(AppContext)

  return (
    <Section showSidebar={showSidebar} {...rest}>
      <DropdownWrapper>
        {filterOptions.map(({ title, options }, i) => (
          <DropdownList key={i} title={title} options={options} />
        ))}
      </DropdownWrapper>
    </Section>
  )
}

export default Sidebar
