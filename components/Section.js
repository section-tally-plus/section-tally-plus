import React, { useState } from 'react'
import tw from 'twin.macro'

import ClassItem from './ClassItem'
import Rating from './Rating'

const Single = tw.ul`relative flex flex-row text-gray-800 items-start justify-start gap-6 py-1 flex-wrap px-4 border-b border-gray-800 border-opacity-10`
const MeetingItem = tw.ul`relative flex flex-row gap-6 flex-wrap`
const SeatingItem = tw.li`relative flex flex-row gap-6 flex-wrap`

const List = tw.div`relative flex flex-col justify-start h-auto gap-4`

const Section = ({
  crn,
  partTerm,
  section,
  prof,
  meetingData,
  max,
  maxResv,
  leftResv,
  enrolled,
  avail,
  waitCap,
  waitCount,
  waitAvail,
  roomCap,
  ...rest
}) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <Single {...rest}>
      <ClassItem heading="CRN">{crn}</ClassItem>
      <ClassItem heading="Part of Term">{partTerm}</ClassItem>
      <ClassItem heading="Section No">{section}</ClassItem>
      <ClassItem
        heading="Professor"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {prof}
      </ClassItem>
      {isShown && <Rating></Rating>}
      <List>
        {meetingData.map(
          ({ day, start, end, building, room, campus, type }, i) => (
            <MeetingItem key={i}>
              <ClassItem heading="Campus">{campus}</ClassItem>
              <ClassItem heading="Day, Start - End">
                {day} {start} - {end}
              </ClassItem>
              <ClassItem heading="Building, Room">
                {building} {room}
              </ClassItem>
              <ClassItem heading="">{type}</ClassItem>
            </MeetingItem>
          )
        )}
      </List>

      <SeatingItem>
        {/*<ClassItem>Enrolled: {enrolled}</ClassItem>*/}
        <ClassItem heading="Availability">
          {avail} / {max}
        </ClassItem>
        <ClassItem>
          Reserved: {leftResv} / {maxResv}
        </ClassItem>
        {/*<ClassItem>Waiting: {waitCount}</ClassItem>*/}
        <ClassItem>
          Waiting: {waitAvail} / {waitCap}
        </ClassItem>
        {/*<ClassItem>Room capacity: {roomCap}</ClassItem>*/}
      </SeatingItem>
    </Single>
  )
}

export default Section
