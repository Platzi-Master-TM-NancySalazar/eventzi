import React, { useEffect } from 'react'
import c3 from 'c3'

const SplineChart = () => {
  useEffect(() => {
    c3.generate({
      bindto: '#spline_chart',
      // size: {
      //   height: 400,
      //   width: 600
      // },
      data: {
        columns: [
          ['A', 0, 20, 30, 40],
          ['B', 0, 40, 50, 60],
          ['C', 0, 60, 100, 140],
        ],
        type: 'spline',
      },
      grid: {
        focus: {
          show: true,
        },
        x: {
          show: false,
        },
        y: {
          show: true,
        },
      },
    })
  }, [])

  return <div id='spline_chart' />
}

export default SplineChart
