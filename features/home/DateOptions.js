import styles from 'styles/Home.module.scss'

import React from 'react'
import { DateTabs } from 'components'
import { useSelector, useDispatch } from 'react-redux'
import { changeTab, changeView } from 'helpers/actions/stateHomePage'

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
      />
    </section>
  )
}

export default DateOptions
