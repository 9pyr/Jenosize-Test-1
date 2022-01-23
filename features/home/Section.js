import React from 'react'
import { ListItems } from 'components'
import { LineChart } from 'features/home'
import { useSelector } from 'react-redux'
import { constantView } from 'helpers/constants'

const Section = ({ data, activeType }) => {
  const store = useSelector((state) => state)
  switch (store.view) {
    case constantView.graph: {
      const resultSorted = sortByDateList(data)
      const valueY = `count_${activeType}s`
      return <LineChart dataSource={resultSorted} valueY={valueY} />
    }
    case constantView.list: {
      const resultSorted = sortByCountList(data, activeType)
      return <ListItems dataSource={resultSorted} activeType={activeType} />
    }
    default:
      return
  }
}
export default Section

const sortByDateList = (data) => {
  return data.sort((a, b) => new Date(a.update_date).getTime() - new Date(b.update_date).getTime())
}
const sortByCountList = (data, activePage) => {
  const fieldCount = `count_${activePage}s`
  return data.sort((a, b) => new Date(b.update_date).getTime() - new Date(a.update_date).getTime() && b[fieldCount] - a[fieldCount])
}
