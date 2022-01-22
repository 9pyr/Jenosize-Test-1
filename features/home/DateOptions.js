import styles from 'styles/pages/Home.module.scss'

import React from 'react'
import { DateTabs } from 'components'
import { useSelector, useDispatch } from 'react-redux'
import { changeTab, changeView, changeDate } from 'helpers/actions/store'

const DateOptions = () => {
  const store = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <section className={styles.date_option_tab}>
      <DateTabs
        value={store}
        onTabsChange={(tab) => {
          dispatch(changeTab(tab))
        }}
        onViewChange={(view) => {
          dispatch(changeView(view))
        }}
        onDateChange={(date) => {
          dispatch(changeDate(date))
        }}
      />
    </section>
  )
}

export default DateOptions
