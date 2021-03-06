import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import { semesters } from '../data/FilterData'
import AppContext from './AppContext'

const Section = styled.select`
  ${tw`w-full px-4 py-2 text-2xl text-gray-800 bg-gray-100 rounded-md`}
`

const SemesterSelect = ({ ...rest }) => {
  const { setSemester, semesterTitle, setSemesterTitle } =
    useContext(AppContext)

  return (
    <Section
      {...rest}
      placeholder="Semester"
      required
      onChange={(e) => {
        setSemester(e.target.value)
        setSemesterTitle(e.target.title)
      }}
    >
      <option value="" disabled selected hidden>
        {semesterTitle}
      </option>
      {semesters.map(({ value, title }, i) => (
        <option key={i} value={value}>
          {title}
        </option>
      ))}
    </Section>
  )
}

export default SemesterSelect
