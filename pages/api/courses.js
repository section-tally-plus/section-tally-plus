import { connectToDatabase } from '../../util/mongodb'

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
  filters.forEach((filter) => {
    if (filter.contains('sectionData')) {
      sectionLevel = true
    }
    if (query[filter]) {
      params[filter] = { $in: query[filter].split('%') }
    }
  })

  const allCourses = await db
    .collection(query.semester)
    .find(params)
    .sort({ Subj: 1 })
    .toArray()
  if (sectionLevel) {
    allCourses.filter((course) => {})
  }

  res.status(200).json(allCourses)
}
