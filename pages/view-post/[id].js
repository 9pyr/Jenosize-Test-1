import styles from 'styles/pages/ViewPost.module.scss'

import React, { useState } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { getLikePost, getPointPost, getPostById } from 'helpers/apis'
import { DetailPost, CommentsList, TopNav } from 'components'
import { faChevronLeft, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

const ViewPost = (props) => {
  const [data, setDate] = useState(props)
  console.log('🔥', data)

  const handleLikePost = async ({ user_id, post_id }) => {
    const { status } = await getLikePost({ user_id, post_id })

    if (status === 200) {
      setDate((prev) => {
        const { post, user } = prev
        return {
          ...prev,
          post: { ...post, count_likes: post.count_likes + 1 },
          user: { ...user, is_like_post: true },
        }
      })
    }
  }
  const handlePointPost = async ({ user_id, post_id }) => {
    const { status } = await getPointPost({ user_id, post_id })

    if (status === 200) {
      setDate((prev) => {
        const { user } = prev
        return {
          ...prev,
          user: { ...user, is_point_post: true },
        }
      })
    }
  }
  const handleLikeComment = async ({ comment_id }) => {
    console.log('comment_id', comment_id)
    const { user_id } = user
    const { status, data } = await getLikePost({ user_id, comment_id })

    if (status === 200 && !data.isLike) {
      setDate((prev) => {
        const indexComment = prev.comments.findIndex((item) => item.id == comment_id)
        const newComment = { ...prev.comments[indexComment] }
        newComment.count_likes += 1
        newComment.is_like = true

        prev.comments[indexComment] = newComment

        return { ...prev }
      })
    }
  }

  return (
    <>
      <TopNav
        title={'Okr'}
        leftIcon={faChevronLeft}
        textLeft='Back'
        classNameLeft={styles.custom_icon_left_nav}
        onLeftClick={() => Router.back()}
        rightIcon={faEllipsisH}
      />
      <div className={styles.view_post}>
        <Head>
          <title>Jenosize Test 1</title>
          <meta name='description' content='Jenosize Test 1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main>
          <DetailPost post={data.post} user={data.user} onLikeClick={handleLikePost} onPointClick={handlePointPost} />
          <CommentsList comments={data.comments} onLikeClick={handleLikeComment} />
        </main>
      </div>
    </>
  )
}

ViewPost.getInitialProps = async (ctx) => {
  const data = await getPostById(ctx.query.id, user)
  return data
}

export default ViewPost

const user = { user_id: 9999 } // user mock
