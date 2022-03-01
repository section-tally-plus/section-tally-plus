import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from '../components/AppContext'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
<<<<<<< HEAD
import PageWrapper from '../components/PageWrapper'
=======
import CourseDisplay from '../components/CourseDisplay'

const data = [
  {
    title: 'Intro Bus/Analytcs Fin Info',
    subject: 'ACC',
    courseNum: '01350',
    creditHours: '3.0',
    sectionData: [
      {
        crn: '44236',
        partTerm: 'Full Term 06-SEP to 21-DEC',
        section: '1',
        prof: 'Lin, Tony',
        meetingData: [
          {
            day: 'TR',
            start: '1100',
            end: '1215',
            prof: 'Lin, Tony',
            building: 'BUSN',
            room: '103',
            campus: 'Main',
            type: 'Lecture',
          },
          {
            day: 'TR',
            start: '1100',
            end: '1215',
            prof: 'Lin, Tony',
            building: 'BUSN',
            room: '103',
            campus: 'Main',
            type: 'Lecture',
          },
        ],
        seatingData: [
          {
            max: 20,
            maxResv: 0,
            leftResv: 0,
            enrolled: 0,
            avail: 20,
            waitCap: 0,
            waitCount: 0,
            waitAvail: 0,
            roomCap: 40,
          },
        ],
      },
      {
        crn: '44236',
        partTerm: 'Full Term 06-SEP to 21-DEC',
        section: '1',
        prof: 'Lin, Tony',
        meetingData: [
          {
            day: 'TR',
            start: '1100',
            end: '1215',
            prof: 'Lin, Tony',
            building: 'BUSN',
            room: '103',
            campus: 'Main',
            type: 'Lecture',
          },
          {
            day: 'TR',
            start: '1100',
            end: '1215',
            prof: 'Lin, Tony',
            building: 'BUSN',
            room: '103',
            campus: 'Main',
            type: 'Lecture',
          },
        ],
        seatingData: [
          {
            max: 20,
            maxResv: 0,
            leftResv: 0,
            enrolled: 0,
            avail: 0,
            waitCap: 0,
            waitCount: 0,
            waitAvail: 0,
            roomCap: 40,
          },
        ],
      },
    ],
  },
  {
    title: 'Intro Bus/Analytcs Fin Info',
    subject: 'ACC',
    courseNum: '01350',
    creditHours: '3.0',
    sectionData: [
      {
        crn: '44236',
        partTerm: 'Full Term 06-SEP to 21-DEC',
        section: '1',
        prof: 'Lin, Tony',
        meetingData: [
          {
            day: 'TR',
            start: '1100',
            end: '1215',
            prof: 'Lin, Tony',
            building: 'BUSN',
            room: '103',
            campus: 'Main',
            type: 'Lecture',
          },
          {
            day: 'TR',
            start: '1100',
            end: '1215',
            prof: 'Lin, Tony',
            building: 'BUSN',
            room: '103',
            campus: 'Main',
            type: 'Lecture',
          },
        ],
        seatingData: [
          {
            max: 20,
            maxResv: 0,
            leftResv: 0,
            enrolled: 0,
            avail: 2,
            waitCap: 0,
            waitCount: 0,
            waitAvail: 0,
            roomCap: 40,
          },
        ],
      },
      {
        crn: '44236',
        partTerm: 'Full Term 06-SEP to 21-DEC',
        section: '1',
        prof: 'Lin, Tony',
        meetingData: [
          {
            day: 'TR',
            start: '1100',
            end: '1215',
            prof: 'Lin, Tony',
            building: 'BUSN',
            room: '103',
            campus: 'Main',
            type: 'Lecture',
          },
          {
            day: 'TR',
            start: '1100',
            end: '1215',
            prof: 'Lin, Tony',
            building: 'BUSN',
            room: '103',
            campus: 'Main',
            type: 'Lecture',
          },
        ],
        seatingData: [
          {
            max: 20,
            maxResv: 0,
            leftResv: 0,
            enrolled: 0,
            avail: 11,
            waitCap: 0,
            waitCount: 0,
            waitAvail: 0,
            roomCap: 40,
          },
        ],
      },
    ],
  },
  {
    title: 'Intro Bus/Analytcs Fin Info',
    subject: 'ACC',
    courseNum: '01350',
    creditHours: '3.0',
    sectionData: [
      {
        crn: '44236',
        partTerm: 'Full Term 06-SEP to 21-DEC',
        section: '1',
        prof: 'Lin, Tony',
        meetingData: [
          {
            day: 'TR',
            start: '1100',
            end: '1215',
            prof: 'Lin, Tony',
            building: 'BUSN',
            room: '103',
            campus: 'Main',
            type: 'Lecture',
          },
          {
            day: 'TR',
            start: '1100',
            end: '1215',
            prof: 'Lin, Tony',
            building: 'BUSN',
            room: '103',
            campus: 'Main',
            type: 'Lecture',
          },
        ],
        seatingData: [
          {
            max: 20,
            maxResv: 0,
            leftResv: 0,
            enrolled: 0,
            avail: 15,
            waitCap: 0,
            waitCount: 0,
            waitAvail: 0,
            roomCap: 40,
          },
        ],
      },
      {
        crn: '44236',
        partTerm: 'Full Term 06-SEP to 21-DEC',
        section: '1',
        prof: 'Lin, Tony',
        meetingData: [
          {
            day: 'TR',
            start: '1100',
            end: '1215',
            prof: 'Lin, Tony',
            building: 'BUSN',
            room: '103',
            campus: 'Main',
            type: 'Lecture',
          },
          {
            day: 'TR',
            start: '1100',
            end: '1215',
            prof: 'Lin, Tony',
            building: 'BUSN',
            room: '103',
            campus: 'Main',
            type: 'Lecture',
          },
        ],
        seatingData: [
          {
            max: 20,
            maxResv: 0,
            leftResv: 0,
            enrolled: 0,
            avail: 19,
            waitCap: 0,
            waitCount: 0,
            waitAvail: 0,
            roomCap: 40,
          },
        ],
      },
    ],
  },
]
>>>>>>> 658ab2690095b57cd7b590b1302eb635569d46c2

export default function Home() {
  return (
    <Layout>
      <Hero />
<<<<<<< HEAD
      <PageWrapper />
=======
      {data.map((course, i) => (
        <CourseDisplay key={i} {...course} />
      ))}
>>>>>>> 658ab2690095b57cd7b590b1302eb635569d46c2
    </Layout>
  )
}
