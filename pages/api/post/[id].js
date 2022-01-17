import { findCommentByPostId, findLikesByPostId, findPointByPostId, findPostById, findUserById, updatePostDataById } from '__mock/actions'

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const { id: post_id } = req.query
  const { user } = req.body

  const { user_id, count_views } = findPostById(post_id)
  const userPost = findUserById(user_id)
  const comments = findCommentByPostId(post_id, user.user_id)
  const likes = findLikesByPostId(post_id)
  const points = findPointByPostId(post_id)

  const { detail, update_date } = updatePostDataById(post_id, 'count_views', (count_views || 0) + 1)
  const is_like_post = likes.some((item) => item.user_id == user.user_id && item.post_id == post_id)
  const is_point_post = points.some((item) => item.user_id == user.user_id && item.post_id == post_id)

  res.status(200).json({
    post: {
      post_id,
      detail,
      update_date,
      count_views: count_views,
      count_likes: likes.length,
      user: userPost,
    },
    user: {
      user_id: user.user_id,
      is_like_post,
      is_point_post,
    },
    comments,
  })
}
