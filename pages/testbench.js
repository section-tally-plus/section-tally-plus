import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/Hero'

const classData = {
  college: '',
  dept: '',
  subj: 'CS',
  PoT: '',
  session: '',

  atribute: '',
  campus: '',
  cr: '4.00',
  courseNo: '04113',
  title: 'INTRO OBJ-ORIENT PRGRMMNG',
  sections: [
    {
      crn: '22349',
      section: '1',
      termLength: 'full',
      profs: ['Chienm Chia C', 'Chadwick, Autumn Toney'],
      location: 'Main',
      max: '27',
      enroled: '16',
      waitlist: '0',
      meetings: [
        {
          type: 'lecture',
          day: 'M',
          start: '08:00',
          end: '09:15',
          bldg: 'ROBSON',
          room: '121',
        },
        {
          type: 'lecture',
          day: 'W',
          start: '08:00',
          end: '09:15',
          bldg: 'ROBSON',
          room: '121',
        },
        {
          type: 'lab',
          day: 'R',
          start: '08:00',
          end: '09:15',
          bldg: 'ROBSON',
          room: '325',
        },
        {
          type: 'lab',
          day: 'R',
          start: '09:30',
          end: '10:45',
          bldg: 'ROBSON',
          room: '325',
        },
      ],
    },
    {
      crn: '22352',
      section: '2',
      termLength: 'full',
      profs: ['Chienm Chia C', 'Chadwick, Autumn Toney'],
      location: 'Main',
      max: '27',
      enroled: '13',
      waitlist: '0',
      meetings: [
        {
          type: 'lecture',
          day: 'M',
          start: '08:00',
          end: '09:15',
          bldg: 'ROBSON',
          room: '121',
        },
        {
          type: 'lecture',
          day: 'W',
          start: '08:00',
          end: '09:15',
          bldg: 'ROBSON',
          room: '121',
        },
        {
          type: 'lab',
          day: 'R',
          start: '08:00',
          end: '09:15',
          bldg: 'ROBSON',
          room: '325',
        },
        {
          type: 'lab',
          day: 'R',
          start: '09:30',
          end: '10:45',
          bldg: 'ROBSON',
          room: '325',
        },
      ],
    },
  ],
}

const Class = tw.div``
const Top = tw.ul``
const Sections = tw.ul``

export default function Home() {
  return (
    <Layout>
      <Class>
        <Top></Top>
        <Sections></Sections>
      </Class>
    </Layout>
  )
}
