import React, { useState, useRef, useContext } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from './AppContext'
import AnimateHeight from 'react-animate-height'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

import ClassItem from './ClassItem'
import Section from './Section'
import FavButton from './FavButton'

const Component = tw.div`relative w-full flex flex-col h-auto shadow-2xl`
const SectionList = tw.ul`relative flex flex-col justify-start h-auto`
const Top = tw.ul`flex flex-row py-2 text-white items-center gap-4 justify-between bg-gray-800 px-4 sm:px-8`
const List = tw.div`grid grid-cols-2 md:grid-cols-4 w-full gap-x-8 max-w-[60rem]`

const CourseDisplay = ({
  Subj: subject,
  Crse: courseNum,
  Title: title,
  Hrs: creditHours,
  sectionData,
  Favorites,
  ...rest
}) => {
  const { allCollapsed, user } = useContext(AppContext)
  const [isClosed, setClosed] = useState(false)

  return (
    <Component {...rest}>
      <Top>
        <List>
          <ClassItem tw="col-span-2">{title}</ClassItem>
          <ClassItem tw="">
            {subject} - {courseNum}
          </ClassItem>
          <ClassItem tw="">Credits: {creditHours}</ClassItem>
        </List>
        <div tw="flex flex-col sm:flex-row gap-2 sm:gap-4">
          {!!user && (
            <FavButton
              courseNum={courseNum}
              subject={subject}
              favorites={Favorites}
            />
          )}
          <button>
            <FontAwesomeIcon
              onClick={() => {
                setClosed(!isClosed)
              }}
              icon={isClosed ? faAngleDown : faAngleUp}
            />
          </button>
        </div>
      </Top>
      <AnimateHeight
        height={isClosed || allCollapsed ? 0 : 'auto'}
        duration={300}
        easing="ease-in-out"
      >
        <SectionList>
          {sectionData?.map((section, i) => (
            <Section key={i} {...section} />
          ))}
        </SectionList>
      </AnimateHeight>
    </Component>
  )
}

export default CourseDisplay
