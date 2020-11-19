import React from 'react'

import 'c3/c3.css'

import UserGender from '../charts/UserGender'
import UserStatus from '../charts/UserStatus'
import UserCountry from '../charts/UserCountry'
import EventType from '../charts/EventType'
import EventStatus from '../charts/EventStatus'

const Analitics = () => {
  return (
    <div className='analitics'>
      <h2 className='analitics_title'>Detailed statistics of your event</h2>
      <section className='analitics_display'>
        <div>
          <h3 className='analitics_titles'>User information</h3>
          <UserGender />
          <UserCountry />
          <UserStatus />
        </div>
        <div>
          <h3 className='analitics_titles'>Event information</h3>
          <EventType />
          <EventStatus />
        </div>
      </section>
    </div>
  )
}

export default Analitics
