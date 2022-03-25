import { connectToDatabase } from '../../../../util/mongodb'
export default async function handler(req, res) {
  const { db } = await connectToDatabase()
  if (req.method == 'DELETE') {
    const result = await db
      .collection('users')
      .updateOne(
        { email: req.query.email },
        {
          $pull: {
            watchlist: { course: req.query.course, Subj: req.query.course },
          },
        }
      )
    res.status(200).json(JSON.stringify(result, null, 2))
  }
}
