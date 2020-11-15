import React, { useEffect, useState } from 'react'
import ApiEventzi from '../utils/ApiEventzi'
import SpeakerModal from '../modals/SpeakerModal'
import GeneralModal from '../modals/GeneralModal'
import AssociateModal from '../modals/AssociateModal'

import { MdDelete } from 'react-icons/md'

const ContainerEvent = ({ event_name, date_, id_event_, clear }) => {
  const [openSpeaker, setOpenSpeaker] = useState(false)
  const [openGeneral, setOpenGeneral] = useState(false)
  const [openAssociate, setOpenAssociate] = useState(false)


  const handleDelete = (id_event_) => {
    ApiEventzi.deleteEvent(id_event_)
      .then((response) => {
        if (response.status == 200) {
          clear([])
        }
      })
      .catch((err) => console.log(err))
  }

  let date = new Date(date_)

  const handleSpeakers = (id_event_) => {
    setOpenSpeaker(true)
    ApiEventzi.getSpeakers(id_event_)
      .then(res => console.log(res.data.data))
  }

  const handleAssociates = (id_event_) => {
    console.log('Associates', id_event_)
    setOpenAssociate(true)
  }

  const handleGeneral = (id_event_) => {
    setOpenGeneral(true)
    console.log('Associates', id_event_)
  }

  const speakerClose = () => {
    setOpenSpeaker(false)
  }

  const associateClose = () => {
    setOpenAssociate(false)
  }

  const generalClose = () => {
    setOpenGeneral(false)
  }

  const handleSubmit = () => {
    console.log('click')
  }


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
      <button onClick={() => handleSpeakers(id_event_)}>Editar speakers</button>
      {openSpeaker && (
        <SpeakerModal
          title='Speakers'
          speakerClose={speakerClose}
          id={id_event_}
        />
      )}{' '}

      <button onClick={() => handleAssociates(id_event_)}>Editar Associates</button>
      {openAssociate && (
        <AssociateModal
          title='Associates'
          associateClose={associateClose}
          id={id_event_}
        />
      )}{' '}

      <button onClick={() => handleGeneral(id_event_)}>Editar General</button>
      {openGeneral && (
        <GeneralModal
          title='General information'
          generalClose={generalClose}
          id={id_event_}
        />
      )}{' '}
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
