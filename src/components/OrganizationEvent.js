import React, { useEffect, useState } from 'react'
import ApiEventzi from '../utils/ApiEventzi'
import FormatDate from '../utils/FormatDate'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ContainerEvent = ({ event_name, date_, id_event_, clear, status_ } ) => {
  const [status, setStatus] = useState(status_)

  const handlePublish=()=>{
    ApiEventzi.publishEvent(id_event_)
    .then((response) => {
      if (response.status == 200) {
        clear([])
      }
    })
    .catch((err) => console.log(err))
  }

  const handleDelete = (id_event_) => {
    ApiEventzi.deleteEvent(id_event_)
    .then((response) => {
      if (response.status == 200) {
        clear([])
      }
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className='organization-event'>
      <div className='organization-event__figure'>
        <div className='organization-event__detail'>
          <h3 className='organization-event__text'>{event_name}</h3>
          <p className='organization-event__text'>{FormatDate(date_)}</p>
        </div>
      </div>
      {status=="Published" ? <div className='organization-event__status--published'>{status}</div> : <div onClick={() => handlePublish(id_event_)} className='organization-event__status'>{status}</div>}
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
