import React, { useEffect, useState } from 'react'
import c3 from 'c3'
import Loader from '../components/Loader'

const UserStatus = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const generateChart = () => {
    c3.generate({
      bindto: '#user_status',
      data: {
        columns: [
          ['Inactive', data[0]],
          ['Active', data[1]]
        ],
        type: 'pie'
      },
      color: {
        pattern: ['#9e9e9e', '#00e676']
      }
    })
  }

  useEffect(() => {
    if (!data.length) {
      fetch('https://eventziapi.herokuapp.com/dashboard/users/ActiveInactive')
        .then((response) => response.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }
  }, [data])

  return (
    <div className='analitics_chart'>
      <p>User status</p>
      <div id='user_status' />
      {loading ? <Loader /> : generateChart()}
    </div>
  )
}

export default UserStatus
