import dayjs from 'dayjs'
import store, { setComment, setLike, setPoint, setPostData } from 'helpers/actions/store'

const getState = () => store.getState().dataStorage || {}

export const findPostById = (post_id) => {
  const { posts: initialPosts = [] } = getState()

  return { ...(initialPosts.find((post) => post.id == post_id) || {}) }
}
export const findUserById = (user_id) => {
  const { users: initialUsers = [] } = getState()

  return { ...(initialUsers.find((user) => user_id == user.id) || {}) }
}
export const findLikesByPostId = (post_id) => {
  const { likes: initialLikes = [] } = getState()

  return initialLikes
    .filter((like) => post_id == like.post_id)
    .map((like) => {
      const { user_id } = like
      const user = findUserById(user_id) || {}
      // delete id user
      delete user.id

      return { ...like, ...user }
    })
}
export const findLikesByCommentId = (comment_id) => {
  const { likes: initialLikes = [] } = getState()

  return initialLikes
    .filter((like) => comment_id == like.comment_id)
    .map((like) => {
      const { user_id } = like
      const user = findUserById(user_id) || {}

      // delete id user
      delete user.id

      return { ...like, ...user }
    })
}
export const findLikesByUserId = (user_id) => {
  const { likes: initialLikes = [] } = getState()

  return initialLikes
    .filter((like) => user_id == like.user_id)
    .map((like) => {
      const { user_id } = like
      const user = findUserById(user_id) || {}

      // delete id user
      delete user.id

      return { ...like, ...user }
    })
}
export const findPointByPostId = (post_id) => {
  const { points: initialPoints = [] } = getState()

  return initialPoints
    .filter((like) => post_id == like.post_id)
    .map((like) => {
      const { user_id } = like
      const user = findUserById(user_id) || {}

      // delete id user
      delete user.id

      return { ...like, ...user }
    })
}
export const findCommentByPostId = (post_id, user_id) => {
  const { comments: initialComments = [], likes: initialLikes = [] } = getState()

  return initialComments
    .filter((comment) => post_id == comment.post_id)
    .map((comment) => {
      const user = findUserById(comment.user_id) || {}
      const likes = findLikesByCommentId(comment.id)
      const is_like = initialLikes.some((like) => like.user_id == user_id && like.comment_id == comment.id)

      // delete id user
      delete user.id
      return { ...comment, ...user, count_likes: likes.length, is_like }
    })
}

// update
export const updatePostDataById = (post_id, key, value) => {
  const { posts: initialPosts = [] } = getState()

  const postIndex = initialPosts.findIndex((post) => post.id == post_id)

  if (postIndex < 0) return {}

  const newPost = { ...initialPosts[postIndex], [key]: value }

  store.dispatch(setPostData({ postIndex, newPost }))
  return newPost
}
export const createNewLikePost = (user_id, post_id) => {
  const { likes: initialLikes = [] } = getState()

  const hasLike = initialLikes.some((like) => like.user_id == user_id && like.post_id == post_id)
  if (hasLike) return

  const lastId = initialLikes[initialLikes.length - 1]?.id || 0
  return store.dispatch(setLike({ id: lastId + 1, post_id: Number(post_id), user_id })).payload
}
export const createNewPointPost = (user_id, post_id) => {
  const { points: initialPoints = [] } = getState()

  const hasPoint = initialPoints.some((point) => point.user_id == user_id && point.post_id == post_id)
  if (hasPoint) return

  const lastId = initialPoints[initialPoints.length - 1]?.id || 0
  return store.dispatch(setPoint({ id: lastId + 1, post_id: Number(post_id), user_id })).payload
}
export const createNewLikeComment = (user_id, comment_id) => {
  const { likes: initialLikes = [] } = getState()

  const hasPoint = initialLikes.some((like) => like.user_id == user_id && like.comment_id == comment_id)
  if (hasPoint) return

  const lastId = initialLikes[initialLikes.length - 1]?.id || 0
  return store.dispatch(setLike({ id: lastId + 1, comment_id: Number(comment_id), user_id })).payload
}
export const createNewComment = (user_id, post_id, comments_detail) => {
  const { comments: initialComments = [] } = getState()

  const lastId = initialComments[initialComments.length - 1]?.id || 0
  return store.dispatch(
    setComment({
      id: lastId + 1,
      post_id: Number(post_id),
      user_id,
      comments_detail,
      update_date: dayjs().format('YYYY-MM-DD HH:mm'),
    })
  ).payload
}
