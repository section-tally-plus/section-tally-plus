import { connectToDatabase } from '../../util/mongodb'
export default async function handler(req, res) {
  if (req.method == 'POST') {
    console.log('in the post')
    const data = req.body
    console.log(data)
    const { db } = await connectToDatabase()
    await db.collection('users').insertOne(data)
  }
}
