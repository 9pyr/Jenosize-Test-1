import { createNewLike } from '__mock/actions'

export default function handler(req, res) {
  const { user_id, post_id } = req.body

  createNewLike(user_id, post_id)
  res.status(200).json({})
}
