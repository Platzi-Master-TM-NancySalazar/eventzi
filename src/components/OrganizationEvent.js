import React, { useEffect, useState } from 'react'
import ApiEventzi from '../utils/ApiEventzi'
import FormatDate from '../utils/FormatDate'
import SpeakerModal from '../modals/SpeakerModal'
import GeneralModal from '../modals/GeneralModal'
import AssociateModal from '../modals/AssociateModal'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ContainerEvent = ({ event_name, date_, id_event_, clear, IsAdmin, status_ }) => {
  const [openSpeaker, setOpenSpeaker] = useState(false)
  const [openAssociate, setOpenAssociate] = useState(false)
  const [openGeneral, setOpenGeneral] = useState([])

  console.log('isAdmin', IsAdmin)

  const arrayTest = ['',
    {
      banner: '',
      created: '',
      date_: '',
      description_: '',
      event_name: '',
      event_type: '',
      id_event_: '',
      id_organization: '',
      logo: '',
      modified: '',
      status_: '',
      template: '',
      url: ''
    }
  ]

  const handlePublish = () => {
    ApiEventzi.publishEvent(id_event_)
      .then((response) => {
        if (response.status === 200) {
          clear([])
        }
      })
      .catch((err) => console.log(err))
  }

  const handleDelete = (id_event_) => {
    ApiEventzi.deleteEvent(id_event_)
      .then((response) => {
        if (response.status === 200) {
          clear([])
        }
      })
      .catch((err) => console.log(err))
  }

  const handleSpeakers = (id_event_) => {
    setOpenSpeaker(true)
    ApiEventzi.getSpeakers(id_event_)
      .then(response => {
        const speakerInfo = response.data.data
        setOpenSpeaker([true, speakerInfo])
      })
  }

  const handleAssociates = (id_event_) => {
    setOpenAssociate(true)
  }

  const handleGeneral = (id_event_) => {
    setOpenGeneral(true)
    ApiEventzi.getGeneral(id_event_)
      .then(response => {
        if (response.data.data.length === 0) {
          setOpenGeneral([true, arrayTest])
        } else {
          const generalInfo = response.data.data
          setOpenGeneral([true, generalInfo])
        }
      })
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

  const generalModalInfo = openGeneral[1]

  return (
    <div className='organization-event'>
      <Link to={`events/${id_event_}`}>
        <div className='organization-event__figure'>
          <div className='organization-event__detail'>
            <h3 className='organization-event__text'>{event_name}</h3>
            <p className='organization-event__text'>{FormatDate(date_)}</p>
          </div>
        </div>

        <button className='button small' onClick={() => handleSpeakers(id_event_)}>Speakers</button>
      </Link>

      {openSpeaker && (
        <SpeakerModal
          title='Speakers'
          speakerClose={speakerClose}
          id={id_event_}
        />
      )}{' '}

      <button className='button small' onClick={() => handleAssociates(id_event_)}>Associates</button>
      {openAssociate && (
        <AssociateModal
          title='Associates'
          associateClose={associateClose}
          id={id_event_}
        />
      )}{' '}

      <button className='button small' onClick={() => handleGeneral(id_event_)}>General Information</button>
      {openGeneral[0] === true && (
        <GeneralModal
          title='General information'
          generalClose={generalClose}
          id={id_event_}
          generalModalInfo={generalModalInfo}
        />
      )}{' '}

      {status_ === 'Published' ? <div className='organization-event__status--published'>{status_}</div> : <div onClick={() => handlePublish(id_event_)} className='organization-event__status'>Publish</div>}

      {IsAdmin &&
        <div onClick={() => handleDelete(id_event_)}>
          <MdDelete className='organization-event__setup' />
        </div>
      }

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
