import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import AnimateHeight from 'react-animate-height'

import SectionList from './SectionList'

const CourseDisplay = ({ ...rest }) => {
  const [isClosed, setClosed] = useState(false)

  const title = 'Intro Bus/Analytcs Fin Info'
  const subject = 'ACC'
  const courseNum = '01350'
  const creditHours = '3.0'
  const crn = '44236'
  const partTerm = 'Full Term 06-SEP to 21-DEC'
  const section = '1'
  const prof = 'Lin, Tony'
  const session = 'Day'
  const day = 'TR'
  const start = '1100'
  const end = '1215'
  const build = 'BUSN'
  const room = '103'
  const campus = 'Main'

  const data = {
    title: title,
    subject: subject,
    courseNum: courseNum,
    creditHours: creditHours,
    meetingInfo: [
      {
        day: 'TR',
        start: start,
        end: end,
        building: build,
        room: room,
        campus: campus,
      },
      {
        day: 'TR',
        start: start,
        end: end,
        building: build,
        room: room,
        campus: campus,
      },
    ],
  }

  const Component = tw.div`relative w-full flex flex-col h-auto`

  const Top = tw.ul`flex flex-row py-2 text-white items-center justify-between bg-gray-800 px-20`

  const Open = tw.button`w-6 h-6 bg-red-400`
  const Close = tw.button`w-6 h-6 bg-blue-400`

  return (
    <Component>
      <Top>
        <ul tw="flex-row flex gap-4">
          <li>{title}</li>
          <li>Subject: {subject}</li>
          <li>Course Number: {courseNum}</li>
          <li>Credit Hours: {creditHours}</li>
        </ul>
        <Open onClick={() => setClosed(false)} />
        <Close onClick={() => setClosed(true)} />
      </Top>
      <SectionList isClosed={isClosed} />
    </Component>
  )
}

export default CourseDisplay
