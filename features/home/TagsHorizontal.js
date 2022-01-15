import styles from 'styles/Home.module.scss'

import React from 'react'
import { TagBtn } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCommentAlt, faGem } from '@fortawesome/free-regular-svg-icons'
import { faGift } from '@fortawesome/free-solid-svg-icons'

const TagsHorizontal = ({ onClick, activeName }) => {
  const handleClickTag = (tagName) => (e) => {
    typeof onClick === 'function' && onClick(e, tagName)
  }

  return (
    <section className={styles.tags}>
      {tagList.map((item, index) => (
        <TagBtn key={index} isActive={activeName === item.activeName} onClick={handleClickTag(item.activeName)}>
          <FontAwesomeIcon icon={item.icon} className={styles.icon_tag} /> {item.text}
        </TagBtn>
      ))}
    </section>
  )
}

export default TagsHorizontal

const tagList = [
  { activeName: 'like', text: 'Like', icon: faThumbsUp },
  { activeName: 'comment', text: 'Comment', icon: faCommentAlt },
  { activeName: 'point', text: 'Point', icon: faGift },
  { activeName: 'diamond', text: 'Diamond', icon: faGem },
]
