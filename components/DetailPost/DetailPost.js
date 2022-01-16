import styles from './DetailPost.module.scss'

import React from 'react'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClock, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faChevronRight, faGift } from '@fortawesome/free-solid-svg-icons'
import { constantFormatDate } from 'helpers/constants'

const DetailPost = (props) => {
  const { post, user } = props

  return (
    <div className={styles.detailPost_styled}>
      <div className={styles.head_detail}>
        <div className={styles.profile_img}></div>
        <div className={styles.title_detail}>
          <div className={styles.name}>{user.name}</div>
          <div className={styles.post_date}>
            <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon_detailPost} />
            {dayjs(post.update_date).format(constantFormatDate.ddmmyyyy_slh)}
          </div>
          <div className={styles.position}>{user.position}</div>
          <div className={styles.post_time}>
            <FontAwesomeIcon icon={faClock} className={styles.icon_detailPost} />
            {dayjs(post.update_date).format(constantFormatDate.time)}
          </div>
        </div>
      </div>

      <div className={styles.body_detail} dangerouslySetInnerHTML={{ __html: post.detail || '' }} />
      <ul className={styles.count_detail}>
        <li>Read (0)</li>
        <li>Unread (0)</li>
        <li>Likes ({post.count_likes})</li>
        <button>
          View <FontAwesomeIcon icon={faChevronRight} className={styles.icon_detailPost} />
        </button>
      </ul>
      <div className={styles.action_post}>
        <button className={styles.button}>
          <FontAwesomeIcon icon={faGift} className={styles.icon_detailPost} /> Give Point
        </button>
        <button className={styles.button}>
          <FontAwesomeIcon icon={faThumbsUp} className={styles.icon_detailPost} />
          Like
        </button>
      </div>
    </div>
  )
}

export default DetailPost
