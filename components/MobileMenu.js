import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from './AppContext'

import FilterSelect from './FilterSelect'
import SemesterSelect from './SemesterSelect'
import GoButton from './GoButton'

const Menu = styled.section(({ mobileMenu }) => [
  tw`z-excessive fixed top-0 left-0 flex flex-col w-full py-12 !text-black duration-500 ease-in-out transform -translate-y-full bg-white`,
  mobileMenu && tw`px-12 translate-y-0`,
])

const CloseButton = tw.button`text-black absolute top-0 right-0 text-4xl font-bold mr-2 mt-2`

const DropdownWrapper = tw.div`flex flex-col relative text-black w-full gap-3 after:(content[''] bg-white h-px w-full bg-opacity-30 absolute bottom-0 left-0) pb-4 mb-4`

const MobileMenu = ({ ...rest }) => {
  const { mobileMenu, setMobileMenu, filters } = useContext(AppContext)

  return (
    <Menu {...rest} mobileMenu={mobileMenu}>
      <CloseButton
        onClick={() => {
          setMobileMenu(false)
        }}
      >
        &times;
      </CloseButton>
      <DropdownWrapper>
        <SemesterSelect />
      </DropdownWrapper>
      <DropdownWrapper>
        {filters.map((item, i) => (
          <FilterSelect tw="text-black" {...item} key={i} />
        ))}
      </DropdownWrapper>
      <GoButton />
    </Menu>
  )
}

export default MobileMenu
