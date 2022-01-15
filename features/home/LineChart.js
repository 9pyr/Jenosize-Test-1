import styles from 'styles/Home.module.scss'

import React from 'react'
import { Line } from '@ant-design/plots'

const LineChart = ({ dataSource, valueY }) => {
  const config = {
    data: dataSource,
    xField: 'update_date',
    yField: valueY,
    point: {
      size: 5,
      style: {
        fill: '#5B8FF9',
      },
    },
    xAxis: { grid: { line: { style: { stroke: '#eaeaea', lineWidth: 1 } } } },

    yAxis: { grid: null },
    tooltip: {
      showMarkers: false,
    },
  }

  return (
    <section className={styles.lineChart_section}>
      <Line {...config} />
    </section>
  )
}

LineChart.defaultProps = {
  dataSource: [],
}

export default LineChart
