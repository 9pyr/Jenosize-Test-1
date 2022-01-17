import { createNewComment } from '__mock/actions'

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const { user_id, post_id, comment_detail } = req.body

  const comment = createNewComment(user_id, post_id, comment_detail)

  res.status(200).json({ comment })
}
