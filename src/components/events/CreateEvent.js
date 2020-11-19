import React, { useEffect, useState } from 'react'
import Modal from '../Modal_Organization'
import Input from '../Input'

import ApiEventzi from '../../utils/ApiEventzi'

const FormEvent = () => {
  const [form, setForm] = useState({})

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  return (
    <form>
      <Input text="event name" event={handleChange} />
      <Input text="event type" event={handleChange} />
      <Input text="status" event={handleChange} />
      <Input text="event description" event={handleChange} />
      <Input text="date" type='date' event={handleChange} />
      <Input text="url" event={handleChange} />
      <Input text="template" event={handleChange} />
      <div style={{ textAlign: 'center' }}>
        <button className='button large'>
          Send
      </button>
      </div>

    </form>
  )
}

const CreateEvent = () => {
  const [openModal, setOpenModal] = useState(false)
  const [img, setImg] = useState('')

  const modalOpen = () => {
    setOpenModal(true)
  }

  const modalClose = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    ApiEventzi.getImage(62)
      .then((response) => {
        setImg(response)
      })
  }, [])

  return (
    <>
      {openModal && (
        <Modal
          title='Create Event'
          content={<FormEvent />}
          modalClose={modalClose}
        />
      )}
      <h1>Hi</h1>
      <img src={img} width='500'/>
    </>
  )
}

export default CreateEvent
