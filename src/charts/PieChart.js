import React, { useEffect } from 'react';
import c3 from 'c3';
import axios from "axios";

let data = () => {
  axios({
    method: 'GET',
    url: 'https://eventziapi.herokuapp.com/dashboard/MaleFemale/total'
  }).then(res => {
    return (res)
  }).catch(err => console.log(err))
}

const DonutChart = () => {
  useEffect(() => {
    c3.generate({
      bindto: '#donut_chart',
      // size: {
      //   height: 400,
      //   width: 600
      // },
      data: {
        // iris data from R
        columns: [
          [
            'Mujeres',
            60
          ],
          [
            'Hombres',
            40
          ],
        ],
        type: 'pie',
        onclick: function (d, i) {
          console.log('onclick', d, i)
        },
        onmouseover: function (d, i) {
          console.log('onmouseover', d, i)
        },
        onmouseout: function (d, i) {
          console.log('onmouseout', d, i)
        },
      },
    })
  }, [])

  return <div id='donut_chart' />
}

export default DonutChart
