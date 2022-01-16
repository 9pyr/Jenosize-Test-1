import styles from './TopNav.module.scss'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TopNav = ({ title, leftIcon, rightIcon, textLeft, textRight, classNameLeft, classNameRight, onLeftClick, onRightClick }) => {
  return (
    <div className={styles.nav_styled}>
      <nav>
        <button className={styles.button_fab} onClick={onLeftClick}>
          <FontAwesomeIcon icon={leftIcon} className={`${styles.icon_nav} ${classNameLeft || ''}`} />
          {textLeft}
        </button>
        <div className={styles.title_nav}>{title}</div>
        <button className={styles.button_fab} onClick={onRightClick}>
          <FontAwesomeIcon icon={rightIcon} className={`${styles.icon_nav} ${classNameRight || ''}`} />
          {textRight}
        </button>
      </nav>
    </div>
  )
}

export default TopNav
