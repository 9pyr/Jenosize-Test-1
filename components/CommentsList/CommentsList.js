import styles from './CommentsList.module.scss'

import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

const CommentsList = ({ comments }) => {
  console.log(comments)
  return (
    <div className={styles.comments_styled}>
      {comments.map((comment, index) => (
        <article key={index} className={styles.comment_item}>
          <div className={styles.head_comment}>
            <div className={styles.profile_img}></div>
            <div className={styles.title_detail}>
              <div>{comment.name}</div>
              <div>{comment.position}</div>
            </div>
          </div>
          <div className={styles.body_comment}>{comment.comments_detail}</div>
          <div className={styles.foot_comment}>
            <div className={styles.time_ago}>{timeAgo.format(new Date(comment.update_date))}</div>
            <div className={styles.likes}></div>
            <div></div>
          </div>
        </article>
      ))}
    </div>
  )
}
CommentsList.defaultProps = {
  comments: [],
}
export default CommentsList
