import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from './AppContext'
import dynamic from 'next/dynamic'
import LazyLoad from 'react-lazyload'

const CourseDisplay = dynamic(() => import('./CourseDisplay'))

const Section = tw.section`relative top-0 right-0 flex flex-col w-full gap-8`

const Results = ({ ...rest }) => {
  const { showSidebar, semesterData, endpoint } = useContext(AppContext)

  return (
    <Section {...rest}>
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
