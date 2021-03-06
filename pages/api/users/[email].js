import { connectToDatabase } from '../../../util/mongodb'
export default async function handler(req, res) {
  const { db } = await connectToDatabase()
  if (req.method == 'GET') {
    const result = await db
      .collection('users')
      .find({ email: { $in: [req.query.email] } })
      .toArray()
    res.status(200).json(JSON.stringify(result, null, 2))
  }
  if (req.method == 'PUT') {
    const course = req.body
    console.log(req.query.email)
    await db
      .collection('users')
      .updateOne({ email: req.query.email }, { $push: { watchlist: course } })
    res.status(200).json(`inserted ${course}`)
  }
}
