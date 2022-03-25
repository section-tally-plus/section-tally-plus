import { connectToDatabase } from '../../../../util/mongodb'
export default async function handler(req, res) {
  const { db } = await connectToDatabase()
  if (req.method == 'GET') {
    if (req.method == 'GET') {
      const result = await db
        .collection('users')
        .find({ email: { $in: [req.query.email] } })
        .toArray()
      res.status(200).json(JSON.stringify(result.watchlist, null, 2))
    }
  }
  if (req.method == 'POST') {
    const courseInfo = req.body
    const result = await db
      .collection('users')
      .updateOne(
        { email: req.query.email },
        { $push: { watchlist: courseInfo } }
      )
    res.status(200).json('created course')
  }
}
