import { connectToDatabase } from '../../util/mongodb'
export default async function handler(req, res) {
  if (req.method == 'POST') {
    const data = req.body
    const { db } = await connectToDatabase()
    await db.collection('users').insertOne(data)
  }
}
