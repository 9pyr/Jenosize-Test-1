import styles from './DatePicker.module.scss'

import React, { useEffect, useRef, useState } from 'react'
import dayjs from 'dayjs'
import { constantDayNames, constantFormatDate, constantTab } from 'helpers/constants'
import { getDateListInMonth } from 'helpers/constantFunc'

const DatePicker = ({ value: initialValue, onChange, viewTab }) => {
  const dateActiveRef = useRef()

  const value = Array.isArray(initialValue) ? dayjs(initialValue[0]) : dayjs(initialValue)
  const day = value.date(),
    month = value.month(),
    year = value.year(),
    dateStr = `${year}-${month + 1}`,
    nonOneDay = [constantTab.weekly].includes(viewTab)
  const onChangeFnc = typeof onChange === 'function' ? onChange : () => {}

  const [holdOneDay, setHoldOneDay] = useState()

  const handleClickDay = ($year, $month, $day) => {
    if (!nonOneDay) {
      const selectDay = dayjs(new Date($year, $month, $day)).format(constantFormatDate.default)
      onChangeFnc(selectDay)
      setHoldOneDay(selectDay)
    }
  }

  const renderDays = () => {
    const dayNow = dayjs().date()
    const monthNow = dayjs().month()
    const days = getDateListInMonth(year, month)

    const createElementDay = (date) => {
      const $date = dayjs(date),
        $year = $date.year(),
        $month = $date.month(),
        $day = $date.date()
      const inMonth = $month === month
      const valueCheck = Array.isArray(initialValue)
        ? initialValue.includes(dayjs(new Date($year, $month, $day)).format(constantFormatDate.default))
        : day === $day

      return (
        <div
          key={`${year}-${$month}-${$day}`}
          value={dayjs(new Date($year, $month, $day)).format(constantFormatDate.default)}
          className={`${dayNow === $day && monthNow === $month ? styles.now_day : ''} ${valueCheck && inMonth ? styles.day_active : ''}`}
          onClick={() => {
            handleClickDay($year, $month, $day)
          }}
        >
          <div className={!inMonth ? styles.not_in_month : ''}>{$day}</div>
        </div>
      )
    }

    let dateElms = [],
      weekly = false,
      startDateOfWeek = void 0
    return days.map((item, index) => {
      const dateElm = createElementDay(item)

      if (dayjs(new Date(year, month, day)).format(constantFormatDate.default) === item && dateElm.props.className.includes(styles.day_active)) {
        weekly = true
      }
      if ((index + 1) % 7 === 0) {
        dateElms.push(dateElm)
        const start = startDateOfWeek,
          end = item,
          isWeekList = weekly
        const createSection = (
          <div
            key={index}
            className={viewTab === constantTab.weekly && isWeekList ? styles.week_list : ''}
            onClick={() => {
              if (nonOneDay) {
                onChangeFnc([start, end])
              }
            }}
          >
            {dateElms}
          </div>
        )

        // reset
        dateElms = []
        weekly = false
        startDateOfWeek = void 0

        return createSection
      } else {
        if (startDateOfWeek === void 0) {
          startDateOfWeek = item
        }
        dateElms.push(dateElm)
      }
    })
  }

  useEffect(() => {
    const dateActiveElm = dateActiveRef.current
    if (dateActiveElm) {
      if (nonOneDay) {
        const [weekListElm] = dateActiveElm.getElementsByClassName(styles.week_list)
        const weekListElmChild = weekListElm?.children
        if (weekListElmChild)
          onChangeFnc([weekListElmChild[0].attributes[0].value, weekListElmChild[weekListElmChild.length - 1].attributes[0].value])
      } else {
        const [dayActiveElm] = dateActiveElm.getElementsByClassName(styles.day_active)
        onChangeFnc(holdOneDay || dayActiveElm.attributes[0].value)
      }
    }
  }, [viewTab, dateActiveRef.current])

  return (
    <section className={styles.section_date_picker}>
      <div className={styles.month_section}>{dayjs(dateStr).format('MMMM YYYY')}</div>
      <article className={styles.date_section}>
        <div className={styles.date_title}>
          {constantDayNames.map(({ dd }) => (
            <div key={dd}>{dd}</div>
          ))}
        </div>
        <div ref={dateActiveRef} className={`${styles.date_body} ${viewTab === constantTab.weekly ? styles.date_week : ''}`}>
          {renderDays()}
        </div>
      </article>
    </section>
  )
}

export default DatePicker
