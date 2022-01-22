import {
  findPostById,
  findUserById,
  findLikesByPostId,
  findPointByPostId,
  findCommentByPostId,
  updatePostDataById,
  createNewLikePost,
  createNewPointPost,
  createNewLikeComment,
  createNewComment,
} from '__mock/controller'

export const getPosts = (posts = []) => {
  return posts.map((post) => {
    const user = findUserById(post.user_id)
    const likes = findLikesByPostId(post.id)
    const comments = findCommentByPostId(post.id)
    const points = findPointByPostId(post.id)

    return {
      id: post.id,
      detail: post.detail,
      update_date: post.update_date,
      name: user.name,
      position: user.position,
      company: user.company,
      count_likes: likes.length,
      count_comments: comments.length,
      count_points: points.length,
    }
  })
}
export const getPostById = (post_id, user) => {
  const { user_id, count_views, detail, update_date } = findPostById(post_id)
  const userPost = findUserById(user_id)
  const comments = findCommentByPostId(post_id, user.user_id)
  const likes = findLikesByPostId(post_id)
  const points = findPointByPostId(post_id)

  const is_like_post = likes.some((item) => item.user_id == user.user_id && item.post_id == post_id)
  const is_point_post = points.some((item) => item.user_id == user.user_id && item.post_id == post_id)

  return {
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
  }
}
export const putLikePost = ({ user_id, post_id, comment_id }) => {
  if (!comment_id) {
    createNewLikePost(user_id, post_id)
  } else {
    createNewLikeComment(user_id, comment_id)
  }
}
export const putPointPost = ({ user_id, post_id }) => {
  createNewPointPost(user_id, post_id)
}
export const setComment = ({ user_id, post_id, comment_detail }) => {
  createNewComment(user_id, post_id, comment_detail)
}
export const updateView = (post_id) => {
  const { count_views } = findPostById(post_id)
  updatePostDataById(post_id, 'count_views', (count_views || 0) + 1)
}
