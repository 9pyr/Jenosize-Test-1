import React from 'react'
import styles from './BottomNav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faCheckCircle, faPaperPlane, faChartPie, faCog } from '@fortawesome/free-solid-svg-icons'
import TabsNav from '../TabsNav'

const BottomNav = () => {
  return (
    <nav className={styles.bottom_nav}>
      <TabsNav className={styles.bottom_div} classNameItem={styles.custom_tab} dataSource={routeList} />
    </nav>
  )
}

export default BottomNav

const FontAwesomeIconCustom = ({ ...props }) => <FontAwesomeIcon {...props} className={styles.icon} />
const routeList = [
  { href: '/write', text: 'Write', icon: <FontAwesomeIconCustom icon={faEdit} /> },
  { href: '/approve', text: 'Approve', icon: <FontAwesomeIconCustom icon={faCheckCircle} /> },
  { href: '/report', text: 'Report', icon: <FontAwesomeIconCustom icon={faPaperPlane} /> },
  { href: '/', text: 'Statistic', icon: <FontAwesomeIconCustom icon={faChartPie} /> },
  { href: '/setting', text: 'Setting', icon: <FontAwesomeIconCustom icon={faCog} /> },
]
