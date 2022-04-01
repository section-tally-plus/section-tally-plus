import { connectToDatabase } from '../../../../util/mongodb'
export default async function handler(req, res) {
  const { db } = await connectToDatabase()
  if (req.method == 'GET') {
    const result = await db
      .collection('users')
      .findOne({ email: { $in: [req.query.email] } })
    res.status(200).json(JSON.stringify(result.takenlist, null, 2))
  }
  if (req.method == 'POST') {
    const courseInfo = req.body
    const result = await db
      .collection('users')
      .updateOne(
        { email: req.query.email },
        { $push: { takenlist: courseInfo } }
      )
    res.status(200).json('created course')
  }
}
