import React, { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import tw from 'twin.macro'

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

const meetingInfo = [
  {
    day: day,
    start: start,
    end: end,
    building: build,
    room: room,
    campus: campus,
  },
  {
    day: day,
    start: start,
    end: end,
    building: build,
    room: room,
    campus: campus,
  },
]

const List = tw.div`relative flex flex-col justify-start h-auto`

const Section = tw.ul`relative flex flex-row text-gray-800 items-start justify-start gap-4 py-1 flex-wrap px-20 border-b border-gray-800 border-opacity-10`

const MeetingInfo = tw.ul`relative flex flex-row gap-4`

const SectionList = ({ isClosed, ...rest }) => {
  return (
    <AnimateHeight
      height={isClosed === true ? 0 : 'auto'}
      duration={250}
      easing="ease-in-out"
    >
      <List>
        <Section {...rest}>
          <li>
            CRN: <a href="#">{crn}</a>
          </li>
          <li>{partTerm}</li>
          <li>Section: {section}</li>
          <li>Professor: {prof}</li>
          <li>
            {meetingInfo.map((meeting, i) => (
              <MeetingInfo key={i}>
                <li>{meeting.campus}</li>
                <li>
                  {meeting.day} {meeting.start} - {meeting.end}
                </li>
                <li>
                  {meeting.building} {meeting.room}
                </li>
                <li>(Lab)</li>
              </MeetingInfo>
            ))}
          </li>
        </Section>
        <Section {...rest}>
          <li>
            CRN: <a href="#">{crn}</a>
          </li>
          <li>{partTerm}</li>
          <li>Section: {section}</li>
          <li>Professor: {prof}</li>
          <li>
            {meetingInfo.map((meeting, i) => (
              <MeetingInfo key={i}>
                <li>{meeting.campus}</li>
                <li>
                  {meeting.day} {meeting.start} - {meeting.end}
                </li>
                <li>
                  {meeting.building} {meeting.room}
                </li>
                <li>(Lab)</li>
              </MeetingInfo>
            ))}
          </li>
        </Section>
      </List>
    </AnimateHeight>
  )
}

export default SectionList
