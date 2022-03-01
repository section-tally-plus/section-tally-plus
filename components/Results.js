import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from './AppContext'
import { data } from '../data/ClassData'

import CourseDisplay from './CourseDisplay'

const Section = styled.section(({ showSidebar }) => [
  tw`relative top-0 right-0 flex flex-col w-full px-8 py-12 ml-auto mr-0 transition-all duration-500 ease-in-out`,
  showSidebar && tw`w-[calc(100% - 20rem)]`,
])

const Results = ({ ...rest }) => {
  const { showSidebar } = useContext(AppContext)
  return (
    <Section showSidebar={showSidebar} {...rest}>
      {data.map((course, i) => (
        <CourseDisplay key={i} {...course} />
      ))}
    </Section>
  )
}

export default Results
