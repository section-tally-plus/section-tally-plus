import { connectToDatabase } from '../../util/mongodb'
import { findValueInSection, findValueinMeeting } from '../../library/Functions'

export default async function handler(req, res) {
  const { db } = await connectToDatabase()
  const query = req.query
  let filters = []
  for (const param in query) {
    filters.push(param)
  }
  filters = filters.slice(1)
  let params = {}
  let sectionLevel = false
  let sectionLevelFilters = []
  let meetingLevel = false
  let meetingLevelFilters = []
  filters.forEach((filter) => {
    if (filter.includes('sectionData')) {
      sectionLevel = true
      if (filter.includes('meetingData')) {
        meetingLevel = true
        meetingLevelFilters.push(filter.replace('sectionData.meetingData.', ''))
      } else {
        sectionLevelFilters.push(filter.replace('sectionData.', ''))
      }
    }
    if (query[filter]) {
      params[filter] = { $in: query[filter].split('%') }
    }
  })

  let allCourses = await db
    .collection(query.semester)
    .find(params)
    .sort({ Subj: 1 })
    .toArray()

  allCourses = allCourses.filter((course) => {
    course.sectionData = course.sectionData.filter((section) => {
      section.meetingData = !meetingLevel
        ? section.meetingData
        : section.meetingData.filter((meeting) => {
            return findValueinMeeting(meeting, meetingLevelFilters, query)
          })
      return findValueInSection(
        section,
        sectionLevelFilters,
        query,
        meetingLevel
      )
    })
    if (course.sectionData.length === 0) {
      return false
    } else {
      return true
    }
  })

  res.status(200).json(allCourses)
}
