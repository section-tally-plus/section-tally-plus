import { connectToDatabase } from '../../../../../../util/mongodb'
export default async function handler(req, res) {
  const { db } = await connectToDatabase()
  if (req.method == 'DELETE') {
    const result = await db.collection('users').updateOne(
      { email: req.query.email },
      {
        $pull: {
          watchlist: {
            course: req.query.course.toString(),
            Subj: req.query.subj.toString(),
          },
        },
      }
    )
    res.status(200).json(JSON.stringify(result, null, 2))
  }
}
