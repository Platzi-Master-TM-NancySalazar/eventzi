import React, { useEffect, useState } from 'react'
import c3 from 'c3'
import Loader from '../components/Loader'

const UserGender = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const generateChart = () => {
    c3.generate({
      bindto: '#user_gender',
      data: {
        columns: [
          ['Female', data[0]],
          ['Male', data[1]],
        ],
        type: 'pie',
      },
    })
  }

  useEffect(() => {
    if (!data.length) {
      fetch('https://eventziapi.herokuapp.com/dashboard/MaleFemale/total')
        .then((response) => response.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }
  }, [data])

  return (
    <>
      <div id='user_gender' />
      {loading ? <Loader /> : generateChart()}
    </>
  )
}

export default UserGender
