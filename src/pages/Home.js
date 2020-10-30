import React from 'react'

import hero from '../assets/static/hero_platziConf.png'
import EventCard from '../components/EventCard'

const Home = () => {
  return (
    <>
      <div className='hero'>
        <div className='hero--element'></div>
        <img className='hero--img' src={hero} alt='Imagen platziConf' />
      </div>
      <div className='home_container'>
        <h3 className='home_container--title'>We recommend</h3>
        <div className='home_container--cards'>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>

        <h3 className='home_container--title'>This week</h3>
        <div className='home_container--cards'>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </>
  )
}

export default Home
