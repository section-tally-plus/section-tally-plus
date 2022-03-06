import React, { useState } from 'react'
import tw from 'twin.macro'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import ClassItem from './ClassItem'
import Rating from './Rating'

const Single = tw.ul`relative flex flex-row text-gray-800 items-start justify-start gap-6 py-1 flex-wrap px-4 border-b border-gray-800 border-opacity-10`
const MeetingItem = tw.ul`relative flex flex-row gap-6 flex-wrap`
const SeatingItem = tw.ul`relative flex flex-row gap-6 flex-wrap`

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
  return (
    <Single {...rest}>
      <ClassItem tw="w-10" heading="CRN">
        {crn}
      </ClassItem>
      <ClassItem tw="w-20" heading="Part of Term">
        {partTerm}
      </ClassItem>
      <ClassItem tw="w-10" heading="Section">
        {section}
      </ClassItem>
      <List>
        {meetingData.map(
          ({ day, start, end, prof, building, room, campus, type }, i) => (
            <MeetingItem key={i}>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={Rating}
              >
                <div>
                  <ClassItem tw="w-36" heading="Professor">
                    {prof}
                  </ClassItem>
                </div>
              </OverlayTrigger>
              <ClassItem tw="w-16" heading="Campus">
                {campus}
              </ClassItem>
              <ClassItem tw="w-32" heading="Day, Start - End">
                {day}, {start} - {end}
              </ClassItem>
              <ClassItem tw="w-24 top-0" heading="Building, Room">
                {building} {room}
              </ClassItem>
              <ClassItem tw="w-14" heading="Type">
                {type}
              </ClassItem>
            </MeetingItem>
          )
        )}
      </List>

      <SeatingItem>
        <ClassItem tw="w-16" heading="Availability">
          {avail} / {max}
        </ClassItem>
        <ClassItem tw="w-16" heading="Reserved">
          {leftResv} / {maxResv}
        </ClassItem>
        <ClassItem tw="w-16" heading="Wait Avail">
          {waitAvail} / {waitCap}
        </ClassItem>
      </SeatingItem>
    </Single>
  )
}

export default Section
