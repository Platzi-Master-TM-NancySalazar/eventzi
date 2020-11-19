import React, { useState } from 'react'
import Modal from './Modal_Organization'
import CreateEvent from '../components/CreateEvent'
import logo_white from '../assets/static/logo-white.svg'
import ApiEventzi from '../utils/ApiEventzi'
import { PostFormat } from '../utils/FormatDate'
import Tooltip from './common/Tooltip'
import Event from './OrganizationEvent'
import Portal from './Portal'

import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdDeleteForever,
  MdAddCircle,
  MdClose
} from 'react-icons/md'

const DeleteConfirm = ({ done, cancel, id }) => {
  return (
    <Portal>
      <div className="modal">
        <div className="modal__container">
          <div className="modal__container-header">
            <h2>Delete confirm</h2>
            <MdClose onClick={cancel} className="modal__container--close" />
          </div>
          <div>
            <p>
              are you sure you want to delete this organization ?
          </p>
            <div className="events__save-area">
              <button className='button small' onClick={cancel} >Cancel</button>
              {' '}
              <button className='button small' onClick={() => done(id)} >Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  )
}

const Organization = ({ id_organization, organization_name, reload }) => {
  const [openModal, setOpenModal] = useState(false)
  const [openEvents, setOpenEvents] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  const handleChange = () => {
    setOpenEvents(!openEvents)
  }
  const modalOpen = () => {
    setOpenModal(true)
  }

  const modalClose = () => {
    setOpenModal(false)
  }

  const handleSubmit = (form) => {
    ApiEventzi.newEvent(
      id_organization,
      form.name,
      form.type,
      form.description,
      PostFormat(form.date),
      form.url,
      form.template
    )
      .then((response) => {
        if (response.status) {
          setOpenModal(false)
        }
      })
      .catch((err) => {
        console.log(err)
        setOpenModal(false)
      })
  }

  const handleCancel = () => {
    setOpenDelete(false)
  }
  const handleDelete = (id_organization) => {
    ApiEventzi.deleteOrganizations(id_organization)
      .then((response) => {
        if (response.status === 200) {
          setOpenDelete(false)
          reload([])
        }
      })
      .catch((err) => {
        console.log(err)
        setOpenDelete(false)
      })
  }

  return (
    <>
      {
        openDelete && <DeleteConfirm done={handleDelete} cancel={handleCancel} id={id_organization} />
      }

      <div
        className={`events_organization ${openEvents && 'events_organization-open'
          }`}
      >
        {openModal && (
          <Modal
            title='Create event'
            content={<CreateEvent submit={handleSubmit} />}
            modalClose={modalClose}
          />
        )}{' '}
        <div className='events_organization-header'>
          <figure className='events_container_logo'>
            <img src={logo_white} className='events_logo' />
          </figure>
          <h3 className='events_organization-title'>{organization_name}</h3>
        </div>
        <div className='organization-event__icon-container'>
          <button className='button text secondary' onClick={handleChange}>
            Events
            {openEvents ? <MdKeyboardArrowUp className='button__icon' /> : <MdKeyboardArrowDown className='button__icon' />}
          </button>
          <Tooltip text='create new event' >
            <MdAddCircle onClick={modalOpen} className='organization-event__icon large general' />
          </Tooltip>
          <Tooltip text='delete organization' >
            <MdDeleteForever className='organization-event__icon large delete' onClick={() => setOpenDelete(true)} />
          </Tooltip>
        </div>
      </div>
      <div className='organization-event__container'>
        {openEvents && <Event id_organization={id_organization} />}
      </div>
    </>
  )
}

export default Organization
