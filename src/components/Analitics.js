import React from 'react'

import 'c3/c3.css';

import BarChart from '../charts/BarChart'
import SplineChart from '../charts/SplineChart'
import PieChart from '../charts/PieChart'
import UserGender from '../charts/UserGender'
import UserStatus from '../charts/UserStatus'
import UserCountry from '../charts/UserCountry'
import EventType from '../charts/EventType'
import EventStatus from '../charts/EventStatus'

const Analitics = () => {
  return (
    <div className='analitics'>
      <h3 className='analitics_title'>Detailed statistics of your event</h3>
      <section className='analitics_display'>
        <div>
          <h4>User information</h4>
          <UserGender />
          <UserCountry />
          <UserStatus />
        </div>
        <div>
          <h4>Event information</h4>
          <EventType />
          <EventStatus />
        </div>
      </section>
    </div>
  )
}

export default Analitics
