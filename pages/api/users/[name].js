import { connectToDatabase } from '../../../util/mongodb'
export default async function handler(req, res) {
  const { db } = await connectToDatabase()
  if (req.method == 'GET') {
    const result = await db
      .collection('users')
      .find({ name: { $in: [req.query.name] } })
      .toArray()
    res.status(200).json(JSON.stringify(result, null, 2))
  }
  if (req.method == 'PUT') {
    const course = req.body
    await db.collection('users').updateOne({ name: 'req.query.name' }),
      { $push: { watchlist: course } }
    res.status(200).json(`inserted ${course}`)
  }
}
