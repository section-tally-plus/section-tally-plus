import { connectToDatabase } from '../../../util/mongodb'
export default async function handler(req, res) {
  const { db } = await connectToDatabase()
  const { slug } = req.query
  if (req.method == 'PATCH') {
    if (req.body.op == 'add') {
      const result = await db
        .collection(slug[0])
        .updateMany(
          { Subj: slug[1], Crse: slug[2] },
          { $inc: { Favorites: 1 } }
        )
      if (result) {
        res.status(200).json('favorites incremented')
      }
    }
    if (req.body.op == 'subtract') {
      const result = await db
        .collection(slug[0])
        .updateMany(
          { Subj: slug[1], Crse: slug[2] },
          { $inc: { Favorites: -1 } }
        )
      if (result) {
        res.status(200).json('favorites decremented')
      }
    }
  }
}
