import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from './AppContext'

import FilterSelect from './FilterSelect'
import SemesterSelect from './SemesterSelect'
import GoButton from './GoButton'

const Section = styled.aside(({ showSidebar }) => [
  tw`fixed bottom-0 left-0 z-50 flex flex-col items-center justify-start h-[calc(100% - 75px)] w-0  py-12 overflow-x-hidden transition-all duration-500 ease-in-out bg-gray-800`,
  showSidebar && tw`w-[20rem] px-8`,
])

const DropdownWrapper = tw.div`flex flex-col relative w-full gap-3 after:(content[''] bg-white h-px w-full bg-opacity-30 absolute bottom-0 left-0) pb-4 mb-4`

const Sidebar = ({ ...rest }) => {
  const { showSidebar, filters } = useContext(AppContext)

  return (
    <Section showSidebar={showSidebar} {...rest}>
      <DropdownWrapper>
        <SemesterSelect />
      </DropdownWrapper>
      <DropdownWrapper>
        {filters.map((item, i) => (
          <FilterSelect {...item} tw="text-white" key={i} />
        ))}
      </DropdownWrapper>
      <GoButton />
    </Section>
  )
}

export default Sidebar
