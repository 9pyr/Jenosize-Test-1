import styles from 'styles/pages/ViewPost.module.scss'

import React from 'react'
import Head from 'next/head'
import { getPostById } from 'helpers/apis'
import { DetailPost, CommentsList } from 'components'

const ViewPost = (props) => {
  console.log('🔥', props)
  return (
    <div className={styles.view_post}>
      <Head>
        <title>Jenosize Test 1</title>
        <meta name='description' content='Jenosize Test 1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <DetailPost post={props.post} user={props.user} />
        <CommentsList comments={props.comments} />
      </main>
    </div>
  )
}

ViewPost.getInitialProps = async (ctx) => {
  const data = await getPostById(ctx.query.id)
  return data
}

export default ViewPost
