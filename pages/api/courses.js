import { connectToDatabase } from '../../util/mongodb'
import { findValueInSection } from '../../library/Functions'
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
  filters.forEach((filter) => {
    if (filter.includes('sectionData')) {
      sectionLevel = true
      sectionLevelFilters.push(filter.replace('sectionData.', ''))
    }
    if (query[filter]) {
      params[filter] = { $in: query[filter].split('%') }
    }
  })
  console.log(query[filters[0]])
  const allCourses = await db
    .collection(query.semester)
    .find(params)
    .sort({ Subj: 1 })
    .toArray()
  sectionLevel &&
    allCourses.forEach((course) => {
      course.sectionData = course.sectionData.filter((section) => {
        return findValueInSection(section, sectionLevelFilters, query)
      })
    })

  res.status(200).json(allCourses)
}
