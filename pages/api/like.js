import { createNewLikePost, createNewLikeComment } from '__mock/actions'

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const { user_id, post_id, comment_id } = req.body
  let isLike = false
  // console.log('🔥🔥', { user_id, post_id, comment_id })
  if (!comment_id) {
    createNewLikePost(user_id, post_id)
  } else {
    const data = createNewLikeComment(user_id, comment_id)

    isLike = !data ? true : false
  }

  res.status(200).json({ isLike })
}
