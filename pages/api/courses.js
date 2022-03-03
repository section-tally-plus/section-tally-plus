import { connectToDatabase } from '../../util/mongodb'

export default async function handler(req, res) {
  const { db } = await connectToDatabase()
  const allCourses = await db.collection('stp_202230').find({}).toArray()
  res.status(200).json(JSON.stringify(allCourses, null, 2))
}
