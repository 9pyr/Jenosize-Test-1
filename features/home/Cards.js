import styles from 'styles/pages/Home.module.scss'

import React from 'react'
import { Card } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCommentAlt, faGem } from '@fortawesome/free-regular-svg-icons'
import { faGift } from '@fortawesome/free-solid-svg-icons'

const Cards = ({ dataSource }) => {
  const { count_likes, count_comments, count_points, count_diamonds } = dataSource

  return (
    <section className={styles.grid}>
      <Card
        className={styles.card}
        textTitle={
          <>
            <FontAwesomeIcon icon={faThumbsUp} className={styles.icon_card} /> Like
          </>
        }
      >
        <h2>{count_likes || 0}</h2>
        <p className='text-gray'>Likes</p>
      </Card>
      <Card
        className={styles.card}
        textTitle={
          <>
            <FontAwesomeIcon icon={faCommentAlt} className={styles.icon_card} /> Comment
          </>
        }
      >
        <h2>{count_comments || 0}</h2>
        <p className='text-gray'>Comments</p>
      </Card>
      <Card
        className={styles.card}
        textTitle={
          <>
            <FontAwesomeIcon icon={faGift} className={styles.icon_card} /> Point
          </>
        }
      >
        <h2>{count_points || 0}</h2>
        <p className='text-gray'>Point</p>
      </Card>
      <Card
        className={styles.card}
        textTitle={
          <>
            <FontAwesomeIcon icon={faGem} className={styles.icon_card} /> Diamond
          </>
        }
      >
        <h2>{count_diamonds || 0}</h2>
        <p className='text-gray'>Diamond</p>
      </Card>
    </section>
  )
}

Cards.defaultProps = {
  dataSource: {},
}

export default Cards
