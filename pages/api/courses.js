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
  filters.forEach((filter) => {
    // console.log(query[filter])
    if (query[filter]) {
      params[filter] = { $in: query[filter].split(',') }
    }
  })
  // params['sectionData.meetingData.day'] = { $in: ['R'] }
  console.log(params)
  const allCourses = await db.collection(query.semester).find(params).toArray()
  res.status(200).json(allCourses)
}
