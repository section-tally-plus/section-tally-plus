import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
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
      },
    ],
  },
  {
    title: 'REALLLLLLLY LLLONNNNNNGGGGG CLLLASSSSSSSS NAMMEEEEEEEEEEE',
    subject: 'ACC',
    courseNum: '01350',
    creditHours: '3.0',
    sectionData: [
      {
        crn: '44236',
        partTerm: 'Full Term 06-SEP to 21-DEC',
        section: '1',
        meetingData: [
          {
            day: 'MF',
            start: '1100',
            end: '1215',
            prof: 'Lin, Different professor',
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
      },
      {
        crn: '44236',
        partTerm: 'Full Term 06-SEP to 21-DEC',
        section: '1',
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
      },
    ],
  },
]

export default function Home() {
  return (
    <Layout>
      <Hero />
      {data.map((course, i) => (
        <CourseDisplay key={i} {...course} />
      ))}
    </Layout>
  )
}
