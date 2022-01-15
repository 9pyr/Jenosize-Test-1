import React from 'react'
import dayjs from 'dayjs'

const DateTextRange = ({ value }) => {
  return (
    <div className='mr-1'>
      {(() => {
        if (Array.isArray(value)) {
          const [start, end] = [dayjs(value[0]), dayjs(value[1])]
          if (start.month() === end.month()) {
            return `${dayjs(value[0]).date()} - ${dayjs(value[1]).date()} ${dayjs(value[0]).format('MMMM YYYY')}`
          }

          return `${dayjs(value[0]).format('DD MMMM YYYY')} - ${dayjs(value[1]).format('DD MMMM YYYY')}`
        }

        return dayjs(value).format('DD MMMM YYYY')
      })()}
    </div>
  )
}

export default DateTextRange
