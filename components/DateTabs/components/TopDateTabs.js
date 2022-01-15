/* eslint-disable react-hooks/exhaustive-deps */
import styles from '../DateTabs.module.scss'

import React, { useEffect, useRef } from 'react'

const TopDateTabs = ({ value, onChange }) => {
  const dateTabsSectionRef = useRef()
  const barActiveRef = useRef()

  useEffect(() => {
    if (dateTabsSectionRef.current) {
      Array.from(dateTabsSectionRef.current.getElementsByTagName('li')).map((elm, index) => {
        if (elm.className.includes('active')) {
          barActiveRef.current.style.width = elm.clientWidth + 'px'
          barActiveRef.current.style.left = elm.offsetLeft + 'px'
        }

        elm.onclick()
      })
    }

    document.onclick
  }, [value])

  return (
    <ul ref={dateTabsSectionRef} className={styles.date_tabs}>
      <div ref={barActiveRef} className={styles.bar_active}></div>
      {dateList.map((text, index) => (
        <li
          key={index}
          className={value === text.toLowerCase() ? 'active' : ''}
          onClick={() => {
            typeof onChange === 'function' && onChange(text.toLowerCase())
          }}
        >
          {text}
        </li>
      ))}
    </ul>
  )
}

const dateList = ['Daily', 'Weekly', 'Monthly']
TopDateTabs.defaultProps = {
  value: dateList[0].toLowerCase(),
}

export default TopDateTabs
