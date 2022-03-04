import { connectToDatabase } from '../../util/mongodb'

export default async function handler(req, res) {
  const { db } = await connectToDatabase()
  const query = req.query
  const allCourses = await db.collection(query.semester).find({}).toArray()
  res.status(200).json(JSON.stringify(allCourses, null, 2))
}
