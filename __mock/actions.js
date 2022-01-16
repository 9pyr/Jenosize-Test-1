import dataMock from './dataMock'

const { posts: initialPosts, users: initialUsers, comments: initialComments, likes: initialLikes } = dataMock

export const findPostById = (post_id) => initialPosts.find((post) => post.id == post_id)
export const findUserById = (user_id) => initialUsers.find((user) => user_id == user.id)
export const findCommentByPostId = (post_id) =>
  initialComments
    .filter((comment) => post_id == comment.post_id)
    .map((comment) => {
      const { user_id } = comment
      const user = findUserById(user_id) || {}

      // delete id user
      delete comment.user_id
      delete user.id
      return { ...comment, ...user }
    })
export const findLikesByPostId = (post_id) =>
  initialLikes
    .filter((like) => post_id == like.post_id)
    .map((like) => {
      const { user_id } = like
      const user = findUserById(user_id) || {}

      // delete id user
      delete like.user_id
      delete user.id

      return { ...like, ...user }
    })
