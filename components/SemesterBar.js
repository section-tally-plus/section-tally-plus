import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import appContext from './AppContext'

const Section = styled.form`
  ${tw`absolute flex flex-row gap-4`}

  .select-selected {
    ${tw`text-green-800`}
  }
`

const Select = styled.select`
  ${tw`w-[20rem] text-2xl py-2 px-4 bg-gray-100 rounded-md text-gray-800`}
`
const Submit = tw.button`bg-blue-800 text-white rounded-md text-lg uppercase w-24 opacity-100 transition-colors ease-in-out duration-300 hover:(bg-blue-500 cursor-pointer)`

const SemesterBar = ({ ...rest }) => {
  const { setSemester } = useContext(appContext)

  const options = [
    { value: 'spring2022', title: 'Spring 2022' },
    { value: 'summer2022', title: 'Summer 2022' },
    { value: 'fall2022', title: 'Fall 2022' },
  ]

  return (
    <Section {...rest}>
      <Select placeholder="Semester" required>
        <option value="" disabled selected hidden>
          Select a Semester
        </option>
        {options.map(({ value, title }, i) => (
          <option value={value}>{title}</option>
        ))}
        {/* <option value="spring2022">Spring 2022</option>
        <option value="summer2022">Summer 2022</option>
        <option value="fall2022">Fall 2022</option>  */}
      </Select>
      <Submit
        onClick={(e) => {
          e.preventDefault()

          // todo: this works but make it be better
          const thisSem = e.target.closest('form').querySelector('select').value
          setSemester(thisSem)
        }}
      >
        Go
      </Submit>
    </Section>
  )
}

export default SemesterBar
