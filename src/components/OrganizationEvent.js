import React, { useEffect, useState } from 'react'
import ApiEventzi from '../utils/ApiEventzi'

import icon_setup from '../assets/static/setup.png'

const ContainerEvent = ({ event_name, date_ }) => {
  
  let date = new Date(date_)
  return (
    <div className='organization-event'>
      <div className='organization-event__figure'>
        <div className='organization-event__detail'>
          <h3 className='organization-event__text'>{event_name}</h3>
          <p className='organization-event__text'>{`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}</p>
        </div>
      </div>
      <div >
        <img src={icon_setup} alt='logo setup' className='organization-event__setup' />
      </div>
    </div>
  )
}

const Event = ({ id_organization }) => {
  const [events, setEvents] = useState([])
  const [mensaje, setMensaje] = useState(false)

  useEffect(() => {
    ApiEventzi.getEventsByOrganization(id_organization)
      .then((response) => {
        if (response.data.data.length > 0) {
          setEvents(response.data.data)
        } else {
          setMensaje('there are no events associated with the organization')
        }
      })
      .catch((err) => console.log(err))
  }, [id_organization])

  return (
    <>
      {mensaje && (
        <div className='organization-event'>
          <p className='organization-event__message'>{mensaje}</p>
        </div>
      )}
      {events.map((event) => {
        return <ContainerEvent {...event} key={event.id_event_} />
      })}
    </>
  )
}

export default Event
