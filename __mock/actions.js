import dataMock from './dataMock'

const { posts: initialPosts, users: initialUsers, comments: initialComments, likes: initialLikes, points: initialPoints } = dataMock
export default dataMock

export const findPostById = (post_id) => ({ ...(initialPosts.find((post) => post.id == post_id) || {}) })
export const findUserById = (user_id) => ({ ...(initialUsers.find((user) => user_id == user.id) || {}) })
export const findLikesByPostId = (post_id) =>
  initialLikes
    .filter((like) => post_id == like.post_id)
    .map((like) => {
      const { user_id } = like
      const user = findUserById(user_id) || {}

      // delete id user
      delete user.id

      return { ...like, ...user }
    })
export const findLikesByCommentId = (comment_id) =>
  initialLikes
    .filter((like) => comment_id == like.comment_id)
    .map((like) => {
      const { user_id } = like
      const user = findUserById(user_id) || {}

      // delete id user
      delete user.id

      return { ...like, ...user }
    })
export const findLikesByUserId = (user_id) =>
  initialLikes
    .filter((like) => user_id == like.user_id)
    .map((like) => {
      const { user_id } = like
      const user = findUserById(user_id) || {}

      // delete id user
      delete user.id

      return { ...like, ...user }
    })
export const findPointByPostId = (post_id) =>
  initialPoints
    .filter((like) => post_id == like.post_id)
    .map((like) => {
      const { user_id } = like
      const user = findUserById(user_id) || {}

      // delete id user
      delete user.id

      return { ...like, ...user }
    })
export const findCommentByPostId = (post_id, user_id) =>
  initialComments
    .filter((comment) => post_id == comment.post_id)
    .map((comment) => {
      const user = findUserById(comment.user_id) || {}
      const likes = findLikesByCommentId(comment.id)
      const is_like = initialLikes.some((like) => like.user_id == user_id && like.comment_id == comment.id)

      // delete id user
      delete comment.user_id
      delete user.id
      return { ...comment, ...user, count_likes: likes.length, is_like }
    })

// update
export const updatePostDataById = (post_id, key, value) => {
  const postIndex = initialPosts.findIndex((post) => post.id == post_id)

  Object.assign(initialPosts[postIndex], { [key]: value })
  return initialPosts[postIndex]
}
export const createNewLikePost = (user_id, post_id) => {
  const hasLike = initialLikes.some((like) => like.user_id == user_id && like.post_id == post_id)
  if (hasLike) return

  const lastId = initialLikes[initialLikes.length - 1]?.id || 0
  initialLikes.push({ id: lastId + 1, post_id: Number(post_id), user_id })

  return initialLikes
}
export const createNewPointPost = (user_id, post_id) => {
  const hasPoint = initialPoints.some((point) => point.user_id == user_id && point.post_id == post_id)
  if (hasPoint) return

  const lastId = initialPoints[initialPoints.length - 1]?.id || 0
  initialPoints.push({ id: lastId + 1, post_id: Number(post_id), user_id })

  return initialPoints
}
export const createNewLikeComment = (user_id, comment_id) => {
  const hasPoint = initialLikes.some((like) => like.user_id == user_id && like.comment_id == comment_id)
  if (hasPoint) return

  const lastId = initialLikes[initialLikes.length - 1]?.id || 0
  initialLikes.push({ id: lastId + 1, comment_id: Number(comment_id), user_id })

  return initialLikes
}
