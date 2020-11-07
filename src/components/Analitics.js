import React from 'react'

import 'c3/c3.css';

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
          <p>Gender of users</p>
          <UserGender />
          <p>Nationality of users</p>
          <UserCountry />
          <p>User status</p>
          <UserStatus />
        </div>
        <div>
          <h4>Event information</h4>
          <p>Event type</p>
          <EventType />
          <p>Event status</p>
          <EventStatus />
        </div>
      </section>
    </div>
  )
}

export default Analitics
