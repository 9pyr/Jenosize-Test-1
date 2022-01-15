import styles from './MonthPicker.module.scss'

import React, { useEffect } from 'react'
import { constantFormatDate, constantMonthNames } from 'helpers/constants'
import dayjs from 'dayjs'

const MonthPicker = ({ value: initialValue, onChange }) => {
  const value = Array.isArray(initialValue) ? dayjs(initialValue[0]) : dayjs(initialValue)
  const month = value.month(),
    year = value.year()
  const onChangeFnc = typeof onChange === 'function' ? onChange : () => {}

  const monthName = dayjs(new Date(2022, month)).format('MMM')
  const handleClick = ($mIndex) => (e) => {
    onChangeFnc([
      dayjs(new Date(year, $mIndex, 1)).format(constantFormatDate.default),
      dayjs(new Date(year, $mIndex + 1, 0)).format(constantFormatDate.default),
    ])
  }
  useEffect(() => {
    onChangeFnc([
      dayjs(new Date(year, month, 1)).format(constantFormatDate.default),
      dayjs(new Date(year, month + 1, 0)).format(constantFormatDate.default),
    ])
  }, [])

  return (
    <section className={styles.month_picker}>
      {constantMonthNames.map((item, index) => (
        <button
          key={index}
          className={`${styles.month_picker_item} ${monthName === item.mm ? styles.active : ''}`}
          onClick={handleClick(item.mIndex)}
        >
          {item.mm}
        </button>
      ))}
    </section>
  )
}

export default MonthPicker
