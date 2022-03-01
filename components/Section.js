import React, { useState } from 'react'
import tw from 'twin.macro'

import ClassItem from './ClassItem'
import Rating from './Rating'

const Single = tw.ul`relative flex flex-row text-gray-800 items-start justify-start gap-6 py-1 flex-wrap px-20 border-b border-gray-800 border-opacity-10`
const MeetingItem = tw.ul`relative flex flex-row gap-6 flex-wrap`
const SeatingItem = tw.li`relative flex flex-row gap-6 flex-wrap`

const List = tw.div`relative flex flex-col justify-start h-auto`

const Section = ({
  crn,
  partTerm,
  section,
  prof,
  meetingData,
  seatingData,
  ...rest
}) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <Single {...rest}>
      <ClassItem>{crn}</ClassItem>
      <ClassItem>{partTerm}</ClassItem>
      <ClassItem>{section}</ClassItem>
      <ClassItem
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {prof}
      </ClassItem>
      {isShown && <Rating></Rating>}
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
      <List>
        {seatingData?.map(
          (
            {
              max,
              maxResv,
              leftResv,
              enrolled,
              avail,
              waitCap,
              waitCount,
              waitAvail,
              roomCap,
            },
            i
          ) => (
            <SeatingItem>
              {/*<ClassItem>Enrolled: {enrolled}</ClassItem>*/}
              <ClassItem>
                Availability: {avail} / {max}
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
          )
        )}
      </List>
    </Single>
  )
}

export default Section
