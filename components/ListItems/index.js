import styles from './ListItems.module.scss'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCommentAlt, faGift, faGem, faBuilding, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const ListItems = ({ dataSource, activeType }) => {
  return (
    <div className={styles.list_items}>
      {dataSource.map((item, index) => {
        const activeTypeItem = activeTypeObj[activeType]
        return (
          <div key={index} className={styles.list_item}>
            <div className={styles.index}>{index + 1}</div>
            <article className={styles.item}>
              <FontAwesomeIcon icon={faUserCircle} className={styles.icon_listItems_profile} />
              <div>
                <div>
                  <span title={item.name}>{item.name},</span>
                  <span className='text-gray' title={item.position}>
                    {item.position}
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faBuilding} className={styles.icon_listItems} />
                  <span>{item.company}</span>
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={activeTypeItem.icon} className={styles.icon_listItems} />
                <span>
                  {item[`count_${activeType}s`]} {activeTypeItem.text}
                </span>
              </div>
            </article>
          </div>
        )
      })}
    </div>
  )
}

ListItems.defaultProps = {
  dataSource: [],
}

const activeTypeObj = {
  like: { icon: faThumbsUp, text: 'People Likes' },
  comment: { icon: faCommentAlt, text: 'Comments' },
  point: { icon: faGift, text: 'Points' },
  diamond: { icon: faGem, text: 'Diamonds' },
}
export default ListItems
