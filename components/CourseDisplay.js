import React, { useState } from 'react'
import tw from 'twin.macro'
import AnimateHeight from 'react-animate-height'

import ClassItem from './ClassItem'
import Section from './Section'

const Component = tw.div`relative w-full flex flex-col h-auto`
const Top = tw.ul`flex flex-row py-2 text-white items-center justify-between bg-gray-800 px-20`
const List = tw.div`flex-row flex gap-8`
const SectionList = tw.ul`relative flex flex-col justify-start h-auto`
const Heading = tw.ul`relative flex flex-row gap-8 scale-90 bg-gray-200 italic`

const Toggle = tw.button` bg-red-400 px-2`

const CourseDisplay = ({
  Subj: subject,
  Crse: courseNum,
  Title: title,
  Hrs: creditHours,
  sectionData,
  ...rest
}) => {
  const [isClosed, setClosed] = useState(false)

  return (
    <Component {...rest}>
      <Top>
        <List>
          <ClassItem tw="w-36">
            {subject} - {courseNum}
          </ClassItem>
          <ClassItem tw="w-96">{title}</ClassItem>
          <ClassItem>Credits: {creditHours}</ClassItem>
        </List>
        <Toggle
          onClick={() => {
            setClosed(!isClosed)
          }}
        >
          toggle
        </Toggle>
      </Top>
      <AnimateHeight height={isClosed ? 0 : 'auto'} easing="ease-in-out">
        <SectionList>
          {sectionData.map((section, i) => (
            <Section key={i} {...section} />
          ))}
        </SectionList>
      </AnimateHeight>
    </Component>
  )
}

export default CourseDisplay
