import React from 'react'
import { ListItems } from 'components'
import { LineChart } from 'features/home'
import { useSelector } from 'react-redux'
import { constantView } from 'helpers/constants'

const Section = ({ data, activeType }) => {
  const store = useSelector((state) => state)
  switch (store.view) {
    case constantView.graph:
      const valueY = `count_${activeType}s`
      return <LineChart dataSource={data} valueY={valueY} />
    case constantView.list:
      return <ListItems dataSource={data} activeType={activeType} />

    default:
      return
  }
}
export default Section
