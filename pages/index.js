import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import CourseDisplay from '../components/CourseDisplay'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CourseDisplay />
    </Layout>
  )
}
