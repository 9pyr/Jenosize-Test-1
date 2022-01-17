import styles from './DateTabs.module.scss'

import React, { useRef, useState } from 'react'
import DateList from './components/DateList'
import DatePicker from 'components/DatePicker'
import MonthPicker from 'components/MonthPicker'
import TopDateTabs from './components/TopDateTabs'
import DateTextRange from './components/DateTextRange'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { constantFormatDate, constantTab, constantView } from 'helpers/constants'
import { faExternalLinkAlt, faChartBar, faList, faAngleDown, faLongArrowAltDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const DateTabs = ({ value, onTabsChange, onViewChange, onDateChange }) => {
  const dateSectionRef = useRef()

  const [dateSelect, setDateSelect] = useState(dayjs().format(constantFormatDate.default))
  const [isOpen, setIsOpen] = useState(false)

  const handleTabsChange = (tabName) => {
    typeof onTabsChange === 'function' && onTabsChange(tabName)
  }
  const handleViewChange = (typeName) => {
    typeof onViewChange === 'function' && onViewChange(typeName)
  }
  const handleDateChange = (date) => {
    typeof onDateChange === 'function' && onDateChange(date)
  }

  return (
    <div className={styles.dateTabs}>
      <div className={styles.date_section}>
        <div ref={dateSectionRef}>
          <div className={styles.date_tabs_section}>
            <TopDateTabs value={value.tab} onChange={handleTabsChange} />
            <div className={styles.show_style}>
              <FontAwesomeIcon
                icon={faChartBar}
                className={`${styles.icon_dateTabs} ${value?.view === constantView.graph ? styles.active : ''}`}
                onClick={() => {
                  handleViewChange(constantView.graph)
                }}
              />
              <FontAwesomeIcon
                icon={faList}
                className={`${styles.icon_dateTabs} ${value?.view === constantView.list ? styles.active : ''}`}
                onClick={() => {
                  handleViewChange(constantView.list)
                }}
              />
            </div>
          </div>

          <div className={styles.date_list_section}>
            {value.tab === constantTab.monthly ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  marginTop: '20px',
                }}
              >
                {dayjs(dateSelect[0]).format('MMMM')}
              </div>
            ) : (
              <DateList
                viewTab={value.tab}
                value={dateSelect}
                onChange={(date) => {
                  setDateSelect(date)
                  handleDateChange(date)
                }}
              />
            )}
            <div className={styles.date_today}>
              <button
                onClick={() => {
                  const dateToday = dayjs().format(constantFormatDate.default)
                  setDateSelect(dateToday)
                  handleDateChange(dateToday)
                }}
              >
                <FontAwesomeIcon icon={faLongArrowAltDown} className={styles.icon_dateTabs} />
                Today
              </button>
            </div>
          </div>
          <div className={styles.picker_container}>
            {value.tab === constantTab.monthly ? (
              <MonthPicker
                value={dateSelect}
                onChange={(date) => {
                  setDateSelect(date)
                  handleDateChange(date)
                }}
              />
            ) : (
              <DatePicker
                viewTab={value.tab}
                value={dateSelect}
                onChange={(date) => {
                  setDateSelect(date)
                  handleDateChange(date)
                }}
              />
            )}
          </div>
        </div>
        <button
          className={styles.button}
          onClick={() => {
            if (!isOpen) {
              dateSectionRef.current.style.maxHeight = '350px'
            } else {
              dateSectionRef.current.style.maxHeight = ''
            }
            setIsOpen(!isOpen)
          }}
        >
          <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className={styles.icon_dateTabs} />
        </button>
      </div>

      <div className={styles.footer}>
        <DateTextRange value={dateSelect} />
        <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.icon_dateTabs} />
      </div>
    </div>
  )
}
const initialValue = {
  view: constantView.graph,
  tab: constantTab.daily,
}
DateTabs.defaultProps = {
  value: initialValue,
}
export default DateTabs
