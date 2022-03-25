import React, { useState, useRef } from 'react'
import tw from 'twin.macro'
import AnimateHeight from 'react-animate-height'
// import Overlay from 'react-bootstrap/esm/Overlay'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons'

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
  //const [fav, setFav] = useState(false)
  const [show, setShow] = useState(false)
  const target = useRef(null)

  return (
    <Component {...rest}>
      <Top>
        <List>
          <ClassItem tw="min-w-[9rem]">
            {subject} - {courseNum}
          </ClassItem>
          <ClassItem tw="min-w-[24rem]">{title}</ClassItem>
          <ClassItem tw="min-w-[7rem]">Credits: {creditHours}</ClassItem>
        </List>

        <button ref={target} onClick={() => setShow(!show)}>
          <FontAwesomeIcon icon={faStar} />
          {!show ? 'Fav' : 'UnFav'}
        </button>
        {/* <Overlay target={target.current} show={show} placement="bottom-start">
          
            <div tw="absolute pl-2 bg-yellow-500">
              {show ? 'Course added to favorites' : 'Course removed from favorites'}
            </div>
          
        </Overlay> */}
        <Toggle
          onClick={() => {
            setClosed(!isClosed)
          }}
        >
          {isClosed ? (
            <FontAwesomeIcon icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon icon={faAngleUp} />
          )}
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
