import React from 'react'
import Link from 'next/link'
import styles from './TabsNav.module.scss'
import { useRouter } from 'next/router'

const TabsNav = ({ dataSource = [], border, classNameItem = '', ...props }) => {
  const { pathname } = useRouter()

  return (
    <div {...props}>
      <div className={styles.tabs}>
        {dataSource.map((item, index) => {
          const isActive = item.href === pathname
          const classActive = isActive ? styles.active : ''
          const borderStyle = border ? styles.border : ''

          return (
            <Link key={index} href={item.href}>
              <a className={`text-gray ${styles.tab} ${borderStyle} ${classActive} ${classNameItem}`}>
                {item.icon}
                <div>{item.text}</div>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TabsNav
