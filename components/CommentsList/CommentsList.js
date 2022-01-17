import styles from './CommentsList.module.scss'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCommentAlt } from '@fortawesome/free-regular-svg-icons'
import { faThumbsUp as faThumbsUpSolid, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

const CommentsList = ({ comments, onLikeClick }) => {

  return (
    <div className={styles.comments_styled}>
      {comments.map((comment, index) => (
        <article key={index} className={styles.comment_item}>
          <div className={styles.head_comment}>
            <FontAwesomeIcon icon={faUserCircle} className={styles.profile_img} />
            <div className={styles.title_detail}>
              <div>{comment.name}</div>
              <div>{comment.position}</div>
            </div>
          </div>
          <div className={styles.body_comment}>{comment.comments_detail}</div>
          <div className={styles.foot_comment}>
            <span className={styles.time_ago}>{timeAgo.format(new Date(comment.update_date))}</span>
            <span className={styles.likes}>{comment.count_likes} like</span>
            <div className={styles.action_comment}>
              <button>
                <FontAwesomeIcon icon={faCommentAlt} className={styles.icon_commentList} /> Reply
              </button>
              <button
                onClick={() => {
                  typeof onLikeClick === 'function' && onLikeClick({ comment_id: comment.id })
                }}
              >
                <FontAwesomeIcon icon={comment.is_like ? faThumbsUpSolid : faThumbsUp} className={styles.icon_commentList} /> Like
              </button>
            </div>
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
