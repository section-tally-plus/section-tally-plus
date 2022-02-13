import React from 'react'
import AnimateHeight from 'react-animate-height'
import tw from 'twin.macro'

import ClassItem from './ClassItem'

const List = tw.div`relative flex flex-col justify-start h-auto`
const Section = tw.ul`relative flex flex-row text-gray-800 items-start justify-start gap-6 py-1 flex-wrap px-20 border-b border-gray-800 border-opacity-10`

const MeetingItem = tw.li`relative flex flex-row gap-6`

const SectionList = ({ isClosed, sectionData, ...rest }) => {
  return (
    <AnimateHeight height={isClosed ? 0 : 'auto'} easing="ease-in-out">
      <List>
        {sectionData.map(({ crn, partTerm, section, prof, meetingData }, i) => (
          <Section key={i}>
            <ClassItem>{crn}</ClassItem>
            <ClassItem>{partTerm}</ClassItem>
            <ClassItem>{section}</ClassItem>
            <ClassItem>{prof}</ClassItem>
            <List>
              {meetingData.map(
                ({ day, start, end, building, room, campus, type }, i) => (
                  <MeetingItem>
                    <ClassItem>{campus}</ClassItem>
                    <ClassItem>
                      {day} {start} - {end}
                    </ClassItem>
                    <ClassItem>
                      {building} {room}
                    </ClassItem>
                    <ClassItem>{type}</ClassItem>
                  </MeetingItem>
                )
              )}
            </List>
          </Section>
        ))}
      </List>
    </AnimateHeight>
  )
}

export default SectionList
