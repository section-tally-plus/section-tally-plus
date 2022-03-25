import React, { useContext, useRef } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from './AppContext'
import useInView from 'react-cool-inview'
import dynamic from 'next/dynamic'
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

  // const { observe, unobserve, inView, scrollDirection, entry } = useInView({
  //   onEnter: ({ unobserve }) => {
  //     unobserve()
  //     axios.get(endpoint).then((res) => {
  //       setTodos([...semesterData, ...res.data])
  //     })
  //   },
  // })

  // console.log(inView)

  return (
    <Section
      showSidebar={showSidebar}
      // ref={observe}
      {...rest}
    >
      {/* {semesterData !== [] &&
        semesterData.map((course, i) => (
          <CourseDisplay
            ref={i === data.length - 1 ? observe : null}
            key={i}
            {...course}
          />
        ))} */}
    </Section>
  )
}

export default Results
