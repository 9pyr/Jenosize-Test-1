import React from 'react'
import styles from './TagBtn.module.scss'

const TagBtn = ({ children, isActive, ...props }) => {
  return <div {...props} className={`${styles.tag} ${isActive ? styles.active : ''}`}>{children}</div>
}

export default TagBtn
