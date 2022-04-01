import React, { useContext, useState } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from './AppContext'
import dynamic from 'next/dynamic'
import LazyLoad from 'react-lazyload'
import axios from 'axios'

import { data } from '../data/ClassData'

// import CourseDisplay from './CourseDisplay'

const CourseDisplay = dynamic(() => import('./CourseDisplay'))

const Section = styled.section(({ showSidebar }) => [
  tw` relative top-0 right-0 flex flex-col w-full px-8 py-12 ml-auto mr-0 transition-all duration-500 ease-in-out`,
  showSidebar && tw`w-[calc(100% - 20rem)]`,
])

const Results = ({ ...rest }) => {
  const { showSidebar, semesterData, endpoint } = useContext(AppContext)
  const [limit, setLimit] = useState(10)

  return (
    <Section showSidebar={showSidebar} {...rest}>
      {semesterData !== [] &&
        semesterData.map((course, i) => (
          <LazyLoad height={200} offset={200} once>
            <CourseDisplay key={course.id} {...course} />
          </LazyLoad>
        ))}
    </Section>
  )
}

export default Results
