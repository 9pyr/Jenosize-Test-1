import { createNewLikePost, createNewLikeComment } from '__mock/actions'

export default function handler(req, res) {
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
