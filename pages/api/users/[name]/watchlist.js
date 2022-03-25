import { connectToDatabase } from '../../../../util/mongodb'
export default async function handler(req, res) {
  const { db } = await connectToDatabase()
  if (req.method == 'GET') {
    const result = await db
      .collection('users')
      .find({ name: { $in: [req.query.name] } })
      .toArray()
    res.status(200).json(JSON.stringify(result[0].watchlist, null, 2))
  }
}
