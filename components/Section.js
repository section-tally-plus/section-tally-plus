import React, { useState } from 'react'
import tw from 'twin.macro'

import ClassItem from './ClassItem'
import Rating from './Rating'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const Single = tw.ul`relative w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-12 text-gray-800 items-start justify-between gap-y-4 py-1 max-w-full px-4 [:not(:last-child)]:(border-b border-gray-800 border-opacity-10)`
const List = tw.div`relative flex flex-col justify-start h-auto gap-y-2 sm:col-span-2 md:col-span-4 lg:col-span-3 2xl:col-span-4`
const MeetingItem = tw.ul`relative flex flex-wrap gap-6 justify-start sm:(grid-cols-3 gap-0 grid)`
const SeatingItem = tw.ul`relative flex flex-wrap gap-6 sm:(col-span-2 gap-0 grid grid-cols-3) lg:col-span-3 2xl:col-span-2`

const Section = ({
  CRN: crn,
  PartOfTerm: partTerm,
  Sect: section,
  Prof: prof,
  Campus: campus,
  meetingData,
  Max: max,
  MaxResv: maxResv,
  LeftResv: leftResv,
  Enr: enrolled,
  Avail: avail,
  WaitCap: waitCap,
  WaitCount: waitCount,
  WaitAvail: waitAvail,
  roomCap,
  ...rest
}) => {
  return (
    <Single {...rest}>
      <ClassItem tw="" heading="CRN">
        {crn}
      </ClassItem>
      <ClassItem tw="sm:col-span-2" heading="Part of Term">
        {partTerm}
      </ClassItem>
      <ClassItem tw="" heading="Section">
        {section}
      </ClassItem>
      <ClassItem tw="md:col-span-2 lg:col-span-1" heading="Professor">
        {prof}
      </ClassItem>
      <ClassItem tw="md:col-span-2 lg:col-span-1" heading="Campus">
        {campus}
      </ClassItem>
      <List>
        {meetingData.map(({ day, start, end, building, room, type }, i) => (
          <MeetingItem key={i}>
            <ClassItem tw="min-w-[9rem] sm:min-w-0" heading="Day, Start - End">
              {!!day && `${day}, ${start} - ${end}`}
            </ClassItem>
            <ClassItem tw="" heading="Classroom">
              {building} {room}
            </ClassItem>
            <ClassItem tw="" heading="Type">
              {type}
            </ClassItem>
          </MeetingItem>
        ))}
      </List>
      <SeatingItem>
        <ClassItem tw="min-w-[4rem]" heading="Availability">
          {avail} / {max}
        </ClassItem>
        <ClassItem tw="min-w-[4rem]" heading="Reserved">
          {leftResv} / {maxResv}
        </ClassItem>
        <ClassItem tw="min-w-[4rem]" heading="Wait Avail">
          {waitAvail} / {waitCap}
        </ClassItem>
      </SeatingItem>
    </Single>
  )
}

export default Section
