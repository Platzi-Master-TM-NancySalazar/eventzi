import React, { useEffect, useState } from 'react'
import ApiEventzi from '../utils/ApiEventzi'

import { MdDelete } from 'react-icons/md'

const ContainerEvent = ({ event_name, date_, id_event_, clear }) => {
  const handleDelete = (id_event_) => {
    ApiEventzi.deleteEvent(id_event_)
      .then((response) => {
        if (response.status === 200) {
          clear([])
        }
      })
      .catch((err) => console.log(err))
  }

  const date = new Date(date_)
  return (
    <div className='organization-event'>
      <div className='organization-event__figure'>
        <div className='organization-event__detail'>
          <h3 className='organization-event__text'>{event_name}</h3>
          <p className='organization-event__text'>{`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}</p>
        </div>
      </div>
      <div onClick={() => handleDelete(id_event_)}>
        <MdDelete className='organization-event__setup' />
      </div>
    </div>
  )
}

const Event = ({ id_organization }) => {
  const [events, setEvents] = useState([])
  const [mensaje, setMensaje] = useState(false)

  useEffect(() => {
    if (!events.length) {
      ApiEventzi.getEventsByOrganization(id_organization)
        .then((response) => {
          if (response.data.data.length > 0) {
            console.log(response.data.data)
            setEvents(response.data.data)
          } else {
            setMensaje('there are no events associated with the organization')
          }
        })
        .catch((err) => console.log(err))
    }
  }, [id_organization, events])

  return (
    <>
      {mensaje && (
        <div className='organization-event'>
          <p className='organization-event__message'>{mensaje}</p>
        </div>
      )}
      {events.map((event) => {
        return <ContainerEvent {...event} key={event.id_event_} clear={setEvents} />
      })}
    </>
  )
}

export default Event
