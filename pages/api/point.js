import { createNewPointPost } from '__mock/actions'

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const { user_id, post_id } = req.body

  createNewPointPost(user_id, post_id)
  res.status(200).json({})
}
