import styles from '../DateTabs.module.scss'

import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { constantDayNames, constantFormatDate, constantTab } from 'helpers/constants'
import { getDateListInMonth } from 'helpers/constantFunc'

const DateList = ({ value: initialValue, onChange, viewTab }) => {
  const value = Array.isArray(initialValue) ? dayjs(initialValue[0]) : dayjs(initialValue)
  const day = value.date(),
    month = value.month(),
    year = value.year(),
    dateStr = `${year}-${month + 1}`,
    nonOneDay = [constantTab.weekly].includes(viewTab)
  const onChangeFnc = typeof onChange === 'function' ? onChange : () => {}

  const [dateValueList, setDateValueList] = useState([])

  const getDayLength = () => {
    const dayNow = dayjs().date(),
      dayNowName = dayjs(new Date(dateStr + `-${day}`)).format('dd'),
      index_ddNames = constantDayNames.findIndex((item) => item.dd === dayNowName)

    return constantDayNames.map(($, index) => {
      const calcDayIndex = day - index_ddNames + index
      let dayIndex = calcDayIndex,
        $year = year,
        $month = month,
        $monthForEnd = month + 1

      if (calcDayIndex > new Date($year, $monthForEnd, 0).getDate()) {
        dayIndex = calcDayIndex - new Date($year, $monthForEnd, 0).getDate()

        $month = $month + 1
        if ($month > 11) {
          $month = 0
          $year = year + 1
        }
      } else if (calcDayIndex < new Date($year, $monthForEnd, 1).getDate()) {
        dayIndex = calcDayIndex + new Date($year, month, 0).getDate()

        $month = $month - 1
        if ($month < 0) {
          $month = 11
          $year = year - 1
        }
      }

      const now_day = dayNow === dayIndex ? styles.now_day : ''
      const day_active = day === dayIndex ? styles.day_active : ''

      return (
        <div
          key={index}
          className={`${now_day} ${day_active}`}
          onClick={() => {
            if (!nonOneDay) {
              onChangeFnc(dayjs(new Date($year, $month, dayIndex)).format(constantFormatDate.default))
            }
          }}
        >
          <div className={$month !== month ? styles.not_in_month : ''}>{dayIndex}</div>
        </div>
      )
    })
  }

  const handleClickPrev = () => {
    if (!nonOneDay) {
      const prevIndex = dateValueList.indexOf(initialValue) - 1
      onChangeFnc(dateValueList[prevIndex])
    } else {
      const prevIndex = dateValueList.indexOf(initialValue[0]) - 7
      // console.log('???? nonOneDay', { prevIndex, dateStart: dateValueList[prevIndex], dateEnd: dateValueList[prevIndex + 6] })
      onChangeFnc([dateValueList[prevIndex], dateValueList[prevIndex + 6]])
    }
  }
  const handleClickNext = () => {
    if (!nonOneDay) {
      const nextIndex = dateValueList.indexOf(initialValue) + 1
      onChangeFnc(dateValueList[nextIndex])
    } else {
      const nextIndex = dateValueList.indexOf(initialValue[0]) + 8
      // console.log('???? nonOneDay', { nextIndex, dateStart: dateValueList[nextIndex], dateEnd: dateValueList[nextIndex + 7] })
      onChangeFnc([dateValueList[nextIndex], dateValueList[nextIndex + 6]])
    }
  }

  useEffect(() => {
    const holdDateValueList = getDateListInMonth(year, month)
    setDateValueList(holdDateValueList)
  }, [dateStr])

  return (
    <>
      <button className={styles.date_list_arrow} onClick={handleClickPrev}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.icon_dateTabs} />
      </button>
      <div className={styles.day_section}>
        <div className={styles.day_list}>
          {constantDayNames.map((name, index) => (
            <div key={index}>{name.d}</div>
          ))}
        </div>
        <div className={`${styles.day_num_list} ${viewTab === constantTab.weekly ? styles.week_list : ''}`}>{getDayLength()}</div>
      </div>
      <button className={styles.date_list_arrow} onClick={handleClickNext}>
        <FontAwesomeIcon icon={faChevronRight} className={styles.icon_dateTabs} />
      </button>
    </>
  )
}

export default DateList
