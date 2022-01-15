import styles from './DatePicker.module.scss'

import React, { useEffect, useRef, useState } from 'react'
import dayjs from 'dayjs'
import { constantDayNames, constantFormatDate, constantTab } from 'helpers/constants'

const DatePicker = ({ value: initialValue, onChange, viewTab }) => {
  const dateActiveRef = useRef()

  const value = Array.isArray(initialValue) ? dayjs(initialValue[0]) : dayjs(initialValue)
  const day = value.date(),
    month = value.month(),
    year = value.year(),
    dateStr = `${year}-${month + 1}`,
    nonOneDay = [constantTab.weekly].includes(viewTab)
  const onChangeFnc = typeof onChange === 'function' ? onChange : () => {}
  const dateValueList = []

  const [holdOneDay, setHoldOneDay] = useState()

  console.log({ day, month, year })

  const handleClickDay = ($year, $month, $day) => {
    if (!nonOneDay) {
      const selectDay = dayjs(new Date($year, $month, $day)).format(constantFormatDate.default)
      onChangeFnc(selectDay)
      setHoldOneDay(selectDay)
    }
  }
  const renderDays = () => {
    const dayNow = dayjs().date()

    const days = []
    const dayNowName = dayjs(dateStr).format('dd')
    const monthForEnd = month + 1

    const dateCheck = ($year, $month, $day) => {
      return Array.isArray(initialValue)
        ? initialValue.includes(dayjs(new Date($year, $month, $day)).format(constantFormatDate.default))
        : day === $day
    }
    for (const [index, item] of Object.entries(constantDayNames)) {
      if (item.dd === dayNowName) break

      let prevMonth = month - 1,
        prevYear = year
      if (prevMonth < 0) {
        prevMonth = 11
        prevYear = year - 1
      }

      const prevDay = new Date(prevYear, prevMonth + 1, 0).getDate() - Number(index)
      const valueCheck = dateCheck(prevYear, prevMonth, prevDay)
      days.unshift(dayjs(new Date(prevYear, prevMonth, prevDay)).format(constantFormatDate.default))
      // days.unshift(
      //   <div
      //     key={'before-' + index}
      //     value={dayjs(new Date(prevYear, prevMonth, prevDay)).format(constantFormatDate.default)}
      //     className={`${dayNow === prevDay ? styles.now_day : ''} ${valueCheck && nonOneDay ? styles.day_active : ''}`}
      //     onClick={() => {
      //       handleClickDay(prevYear, prevMonth, prevDay)
      //     }}
      //   >
      //     <div className={styles.not_in_month}>{prevDay}</div>
      //   </div>
      // )
    }
    for (let dayInx = 1; dayInx <= new Date(year, monthForEnd, 0).getDate(); dayInx++) {
      const valueCheck = dateCheck(year, month, dayInx)
      days.push(dayjs(new Date(year, month, dayInx)).format(constantFormatDate.default))
      // days.push(
      //   <div
      //     key={`${month}-${dayInx}`}
      //     value={dayjs(new Date(year, month, dayInx)).format(constantFormatDate.default)}
      //     className={`${dayNow === dayInx ? styles.now_day : ''} ${valueCheck ? styles.day_active : ''}`}
      //     onClick={() => {
      //       handleClickDay(year, month, dayInx)
      //     }}
      //   >
      //     <div>{dayInx}</div>
      //   </div>
      // )
    }

    const endDayOfM = dayjs(dateStr + `-${new Date(2022, monthForEnd, 0).getDate()}`).format('dd')
    const endDayOut = constantDayNames.findIndex((item) => item.dd === endDayOfM)
    for (let index = 0; index < constantDayNames.length - (endDayOut + 1); index++) {
      let nextMonth = month + 1,
        nextYear = year
      if (nextMonth > 11) {
        nextMonth = 0
        nextYear = year + 1
      }

      const nextDay = new Date(nextYear, nextMonth + 1, 1).getDate() + Number(index)
      const valueCheck = dateCheck(nextYear, nextMonth, nextDay)

      days.push(dayjs(new Date(nextYear, nextMonth, nextDay)).format(constantFormatDate.default))
      // days.push(
      //   <div
      //     key={'after-' + index}
      //     value={dayjs(new Date(nextYear, nextMonth, nextDay)).format(constantFormatDate.default)}
      //     className={`${dayNow === nextDay ? styles.now_day : ''} ${valueCheck && nonOneDay ? styles.day_active : ''}`}
      //     onClick={() => {
      //       handleClickDay(nextYear, nextMonth, nextDay)
      //     }}
      //   >
      //     <div className={styles.not_in_month}>{nextDay}</div>
      //   </div>
      // )
    }

    let dateElms = [],
      weekly = false,
      startDateOfWeek = void 0

    const createElementDay = (date) => {
      const $date = dayjs(date),
        $year = $date.year(),
        $month = $date.month(),
        $day = $date.date()
      const valueCheck = dateCheck($year, $month, $day)

      return (
        <div
          key={`${$month}-${$day}`}
          value={dayjs(new Date($year, $month, $day)).format(constantFormatDate.default)}
          className={`${dayNow === $day ? styles.now_day : ''} ${valueCheck && $month === month ? styles.day_active : ''}`}
          onClick={() => {
            handleClickDay($year, $month, $day)
          }}
        >
          <div className={$month !== month ? styles.not_in_month : ''}>{$day}</div>
        </div>
      )
    }
    return days.map((item, index) => {
      const dateElm = createElementDay(item)

      if ((index + 1) % 7 === 0) {
        dateElms.push(dateElm)
        const start = startDateOfWeek,
          end = item
        const createSection = (
          <div
            key={index}
            className={viewTab === constantTab.weekly && weekly ? styles.week_list : ''}
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
        if (dayjs(new Date(year, month, day)).format(constantFormatDate.default) === item && dateElm.props.className.includes(styles.day_active)) {
          weekly = true
        }
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
