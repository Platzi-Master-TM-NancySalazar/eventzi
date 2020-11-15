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
        columns: [
          ['Users', 30, 200, 100, 400, 150, 250, 50, 100, 250, 12]
        ],
        type: 'bar'
      },
      axis: {
        x: {
          type: 'category',
          categories: [
            'COL',
            'MÉX',
            'CHI',
            'BRA',
            'ECU',
            'ESP',
            'URU',
            'ARG',
            'PAR',
            'PER'
          ]
        }
      },
      color: {
        pattern: ['#2196f3']
      },
      bar: {
        width: {
          ratio: 0.5
        }
      },
      grid: {
        focus: {
          show: true
        },
        x: {
          show: false
        },
        y: {
          show: true
        }
      }
    })
  }

  return (
    <div className='analitics_chart'>
      <p>Nationality of users</p>
      <div id='user_country' />
      {loading ? <Loader /> : generateChart()}
    </div>
  )
}

export default UserCountry
