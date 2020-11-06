import React, { useEffect, useState } from 'react'
import c3 from 'c3'
import Loader from '../components/Loader'

const UserCountry = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    if (!data.length) {
      fetch('https://eventziapi.herokuapp.com/dashboard/users/country')
        .then((response) => response.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }
  }, [data])

  const generateChart = () => {
    c3.generate({
      bindto: '#user_country',
      data: {
        columns: [['Countries'].concat(data)],
        type: 'bar',
      },
      bar: {
        width: {
          ratio: 0.5, 
        },
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
  }

  return (
    <>
      <div id='user_country' className='analitics_chart' />
      {loading ? <Loader /> : generateChart()}
    </>
  )
}

export default UserCountry
