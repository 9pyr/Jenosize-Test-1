import dayjs from 'dayjs'
import { constantDayNames, constantFormatDate } from './constants'

export const getDateListInMonth = ($year, $month) => {
  const days = []
  const monthForEnd = $month + 1
  const dayNowName = dayjs(`${$year}-${monthForEnd}`).format('dd')
  //? before month
  for (const [index, item] of Object.entries(constantDayNames)) {
    if (item.dd === dayNowName) break

    let prevMonth = $month - 1,
      prevYear = $year
    if (prevMonth < 0) {
      prevMonth = 11
      prevYear = $year - 1
    }

    const prevDay = new Date(prevYear, prevMonth + 1, 0).getDate() - Number(index)
    days.unshift(dayjs(new Date(prevYear, prevMonth, prevDay)).format(constantFormatDate.default))
  }
  //? in month
  for (let dayInx = 1; dayInx <= new Date($year, monthForEnd, 0).getDate(); dayInx++) {
    days.push(dayjs(new Date($year, $month, dayInx)).format(constantFormatDate.default))
  }

  //? after month
  const endDayOfM = dayjs(`${$year}-${monthForEnd}-${new Date($year, monthForEnd, 0).getDate()}`).format('dd')
  const endDayOut = constantDayNames.findIndex((item) => item.dd === endDayOfM)
  for (let index = 0; index < constantDayNames.length - (endDayOut + 1); index++) {
    let nextMonth = $month + 1,
      nextYear = $year
    if (nextMonth > 11) {
      nextMonth = 0
      nextYear = $year + 1
    }
    const nextDay = new Date(nextYear, nextMonth + 1, 1).getDate() + Number(index)

    days.push(dayjs(new Date(nextYear, nextMonth, nextDay)).format(constantFormatDate.default))
  }

  return days
}
