import React from 'react'
import styles from './Card.module.scss'

const Card = ({ textTitle, children, className }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <h2 className={styles.title}>{textTitle}</h2>
      <div className={styles.body}>{children}</div>
    </div>
  )
}

export default Card
