import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import appContext from './AppContext'

import SemesterSelect from './SemesterSelect'
import GoButton from './GoButton'

const Section = styled.form`
  ${tw`absolute flex flex-row gap-4`}

  .select-selected {
    ${tw`text-green-800`}
  }
`

const Submit = tw.button`bg-blue-800 text-white rounded-md text-lg uppercase w-24 opacity-100 transition-colors ease-in-out duration-300 hover:(bg-blue-500 cursor-pointer)`

const SemesterBar = ({ ...rest }) => {
  const { setSemester, toggleResults, toggleSidebar } = useContext(appContext)

  return (
    <Section {...rest}>
      <SemesterSelect />
      <GoButton />
    </Section>
  )
}

export default SemesterBar
