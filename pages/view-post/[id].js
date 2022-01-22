import styles from 'styles/pages/ViewPost.module.scss'

import React, { useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { putLikePost, putPointPost, getPostById, setComment, updateView } from 'helpers/actions/apis'
import { DetailPost, CommentsList, TopNav, Comment } from 'components'
import { faChevronLeft, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

const ViewPost = ({ id }) => {
  const { post = {}, user = {}, comments } = useSelector(() => getPostById(id, initialUser))

  const handleLikePost = ({ user_id, post_id }) => {
    putLikePost({ user_id, post_id })
  }
  const handlePointPost = ({ user_id, post_id }) => {
    putPointPost({ user_id, post_id })
  }
  const handleLikeComment = ({ comment_id }) => {
    const { user_id } = user
    putLikePost({ user_id, comment_id })
  }
  const handleCommentSubmit = (value) => {
    const { post_id } = post
    setComment({ user_id: user.user_id, post_id, comment_detail: value.comment })
  }

  useEffect(() => {
    return () => updateView(id)
  }, [id])

  return (
    <>
      <TopNav
        title={'Report'}
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
          <DetailPost post={post} user={user} onLikeClick={handleLikePost} onPointClick={handlePointPost} />
          <CommentsList comments={comments} onLikeClick={handleLikeComment} />
        </main>
      </div>
      <Comment onSubmit={handleCommentSubmit} />
    </>
  )
}

ViewPost.getInitialProps = async (ctx) => {
  return { id: ctx.query.id }
}

export default ViewPost

const initialUser = { user_id: 9999 } // user mock
