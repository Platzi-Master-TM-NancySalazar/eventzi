import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/static/hero_platziConf.png'
import EventCard from '../components/EventCard'
import Error from '../pages/Error'
import Loader from '../components/Loader'
import FormatDate from '../utils/FormatDate'

import ApiEventzi from '../utils/ApiEventzi'

import globalContext from '../context/globalContext'

const Home = () => {
  const { search } = useContext(globalContext)
  const [state, setState] = useState({
    loading: true,
    data: [],
    filterData: [],
    error: false
  })

  const { data } = state
  useEffect(() => {
    if (data.length > 0 && search) {
      const filter = state.data.filter((event) =>
        event.event_name
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
      )
      setState({ ...state, filterData: filter })
    }
    if (data.length > 0 && !search) {
      setState({ ...state, filterData: data })
    }
  }, [data, search])

  useEffect(() => {
    if (!state.data.length && !state.error) {
      ApiEventzi.upcoming()
        .then((response) => {
          const data = response.data.data
          data.sort((a, b) =>
            a.event_name.localeCompare(b.event_name, undefined, {
              numeric: true,
              sensitivity: 'base'
            })
          )
          if (data.length > 0) {
            setState({ ...state, loading: false, data: data, filterData: data })
          } else {
            setState({ ...state, loading: false, error: true })
          }
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
        <h2 className='home_container--title'>Upcoming</h2>
        <div className='home_container--cards'>
          {
            state.filterData.length === 0 && <h3 style={{ marginBottom: '300px' }} >no search results.</h3>
          }

          {state.filterData.map((card) => {
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
