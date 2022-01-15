import styles from './TopNav.module.scss'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSlidersH } from '@fortawesome/free-solid-svg-icons'

const TopNav = () => {
  return (
    <div className={styles.nav_styled}>
      <nav>
        <button className={styles.button_fab}>
          <FontAwesomeIcon icon={faHome} className={styles.icon_nav} />
        </button>
        <div className={styles.title_nav}>All Report</div>
        <button className={styles.button_fab}>
          <FontAwesomeIcon icon={faSlidersH} className={styles.icon_nav} />
        </button>
      </nav>
    </div>
  )
}

export default TopNav
