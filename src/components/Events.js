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
    if (!organizations.length) {
      ApiEventzi.getOrganizations()
        .then((response) => {
          setOrganizations(response.data.data)
        })
        .catch((err) => console.log(err))
    }
  }, [organizations])

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
          setOrganizations([])
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

      <button onClick={modalOpen} className='button small'>
        <HiOutlinePlusCircle className='button__icon' />
          Create organization
      </button>

      {organizations.map((organization) => {
        return (
          <Organization {...organization} key={organization.id_organization} reload={setOrganizations}/>
        )
      })}
    </div>
  )
}

export default Events
