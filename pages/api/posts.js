// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { findCommentByPostId, findLikesByPostId, findUserById } from '__mock/actions'
import dataMock from '__mock/dataMock'

const { posts: initialPosts } = dataMock
export default function handler(req, res) {
  const posts = initialPosts.map((post) => {
    const user = findUserById(post.user_id)
    const likes = findLikesByPostId(post.id)
    const comments = findCommentByPostId(post.id)

    return {
      id: post.id,
      detail: post.detail,
      update_date: post.update_date,
      name: user.name,
      position: user.position,
      company: user.company,
      count_likes: likes.length,
      count_comments: comments.length,
    }
  })

  res.status(200).json(posts)
}
