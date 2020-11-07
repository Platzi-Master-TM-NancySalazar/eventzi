import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/static/hero_platziConf.png'
import EventCard from '../components/EventCard'
import Error from '../pages/Error'
import Loader from '../components/Loader'
import FormatDate from '../utils/FormatDate'

import ApiEventzi from '../utils/ApiEventzi'

const Home = () => {
  const [state, setState] = useState({
    loading: true,
    data: [],
    error: false,
  })

  useEffect(() => {
    if (!state.data.length && !state.error) {
      ApiEventzi.upcoming()
        .then((response) => {
          let data = response.data.data
          data.sort((a, b) => a.event_name.localeCompare(b.event_name, undefined, { numeric: true, sensitivity: 'base' }))
          setState({ ...state, loading: false, data: data })
        })
        .catch((err) => {
          console.log(err)
          setState({ ...state, loading: false, error: true })
        })
    }
  }, [state])

  if (state.loading) {
    return <Loader />
  }

  if (state.error) {
    return <Error />
  }


  return (
    <>
      <div className='hero'>
        <div className='hero--element'></div>
        <img className='hero--img' src={hero} alt='Imagen platziConf' />
      </div>
      <div className='home_container'>
        <h3 className='home_container--title'>Upcoming</h3>
        <div className='home_container--cards'>
          {state.data.map((card) => {
            return (
              <Link to={`events/${card.id_event_}`} key={card.id_event_}>
                <EventCard
                  title={card.event_name}
                  date={FormatDate(card.date_)}
                  organizer={card.event_type}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home
