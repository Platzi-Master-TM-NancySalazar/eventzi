import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import Portal from '../components/Portal'
import { MdClose } from 'react-icons/md'
import ApiEventzi from '../utils/ApiEventzi'
import { PostFormat } from '../utils/FormatDate'

const SpeakerNewModal = ({ addNewSpeakerClose, title, id, eventName }) => {
  const [form, setForm] = useState(null)
  const [date_, setDate] = useState()

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
      date_
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    newSpeaker(form)
  }

  const newSpeaker = (form) => {
    ApiEventzi.postSpeaker(id, form)
      .then(() => addNewSpeakerClose())
      .catch((err) => console.error(err))
  }

  return (
        <Portal>
            <div className="modal">
                <div className="modal__container">
                    <div className="modal__container-header">
                        <h3>{title}</h3>
                        <MdClose className="modal__container--close" onClick={addNewSpeakerClose} />
                    </div>
                    <form className='events__form' onSubmit={handleSubmit}>
                        <div className='input-material'>
                            <input type='text' className='input-material__input' name='fullname' onChange={handleInput} required />
                            <label className='input-material__label'>
                                <span className='input-material__text'>Name</span>
                            </label>
                        </div>

                        <div className='input-material'>
                            <input type='text' className='input-material__input' name='role_' onChange={handleInput} required />
                            <label className='input-material__label'>
                                <span className='input-material__text'>Rol</span>
                            </label>
                        </div>

                        <div className='input-material'>
                            <input type='text' className='input-material__input' name='description_' onChange={handleInput} required />
                            <label className='input-material__label'>
                                <span className='input-material__text'>Description</span>
                            </label>
                        </div>

                        <div className='input-material'>
                            <input type='text' className='input-material__input' name='twitter' onChange={handleInput} required />
                            <label className='input-material__label'>
                                <span className='input-material__text'>Twitter</span>
                            </label>
                        </div>

                        <div className='input-material'>
                            <input type='text' className='input-material__input' name='bio' onChange={handleInput} required />
                            <label className='input-material__label'>
                                <span className='input-material__text'>Bio</span>
                            </label>
                        </div>

                        <div className='input-material'>
                            <input type='datetime-local' className='input-material__input' id="meeting-time" name='date_' value={date_} onChange={(e) => setDate(PostFormat(e.target.value))} required />
                            <label className='input-material__label'>
                                <span className='input-material__text-date'>Date</span>
                            </label>
                        </div>

                        <div className='input-material'>
                            <input type='text' className='input-material__input' name='title' onChange={handleInput} required />
                            <label className='input-material__label'>
                                <span className='input-material__text'>Title of the talk</span>
                            </label>
                        </div>

                        <button type='submit' className="button small">Add Speaker</button>
                    </form>

                </div>
            </div>
        </Portal>
  )
}

export default SpeakerNewModal
