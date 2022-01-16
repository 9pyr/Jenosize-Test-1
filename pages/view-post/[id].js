import styles from 'styles/pages/ViewPost.module.scss'

import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { getLikePost, getPostById } from 'helpers/apis'
import { DetailPost, CommentsList, TopNav } from 'components'
import { faChevronLeft, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import callApi from 'helpers/callApi'

const ViewPost = (props) => {
  const [data, setDate] = useState(props)
  console.log('🔥', data)

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
          <DetailPost
            post={data.post}
            user={data.user}
            onLikeClick={async ({ user_id, post_id }) => {
              await getLikePost({ user_id, post_id })

              const data = await getPostById(post_id, user)
              setDate(data)
            }}
          />
          <CommentsList comments={data.comments} />
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

const user = { user_id: 9999 }
