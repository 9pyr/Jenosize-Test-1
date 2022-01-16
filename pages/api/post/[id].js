import { findCommentByPostId, findLikesByPostId, findPostById, findUserById } from '__mock/actions'

export default function handler(req, res) {
  const { id } = req.query
  const post = findPostById(id)
  const user = findUserById(post.user_id)
  const comments = findCommentByPostId(id)
  const likes = findLikesByPostId(id)

  post.count_likes = likes.length

  res.status(200).json({ post, user, comments })
}
