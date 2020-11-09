import React, { useEffect, useState } from 'react'

import Modal from './Modal_Organization'
import Organization from './Organization'
import CreateOrganization from '../components/CreateOrganization'
import ApiEventzi from '../utils/ApiEventzi'

import { HiOutlinePlusCircle } from 'react-icons/hi'

const Events = () => {
  const [openModal, setOpenModal] = useState(false)
  const [organizations, setOrganizations] = useState([])

  useEffect(() => {
    ApiEventzi.getOrganizations()
      .then((response) => {
        setOrganizations(response.data.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const modalOpen = () => {
    setOpenModal(true)
  }

  const modalClose = () => {
    setOpenModal(false)
  }

  const handleSubmit = (form) => {
    ApiEventzi.newOrganization(form.name, form.description)
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

  return (
    <div className='events'>
      {openModal && (
        <Modal
          title='Create organization'
          content={<CreateOrganization submit={handleSubmit} />}
          modalClose={modalClose}
        />
      )}
      <div className='events_buttons'>
        <button onClick={modalOpen} className='events_button'>
          <HiOutlinePlusCircle className='events_button__icon' />
          Create organization
        </button>
      </div>

      {organizations.map((organization) => {
        return (
          <Organization {...organization} key={organization.id_organization} />
        )
      })}
    </div>
  )
}

export default Events
