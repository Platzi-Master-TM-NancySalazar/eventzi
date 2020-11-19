import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import Portal from '../components/Portal'
import { MdClose } from 'react-icons/md'
import ApiEventzi from '../utils/ApiEventzi'

const AssociateNewModal = ({ addNewAssociateClose, title, id, eventName }) => {
  const [form, setForm] = useState(null)

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    newAssociate(form)
  }

  const newAssociate = (form) => {
    ApiEventzi.postAssociate(id, form)
      .then(() => addNewAssociateClose())
      .catch((err) => console.error(err))
  }

  return (
        <Portal>
            <div className="modal">
                <div className="modal__container">
                    <div className="modal__container-header">
                        <h3>{title}</h3>
                        <button className="modal__container--close" onClick={addNewAssociateClose}>
                            <MdClose />
                        </button>
                    </div>
                    <form className='events__form' onSubmit={handleSubmit}>
                        <div className='input-material'>
                            <input type='text' className='input-material__input' name='name_' onChange={handleInput} required />
                            <label className='input-material__label'>
                                <span className='input-material__text'>Name</span>
                            </label>
                        </div>

                        <div className='input-material'>
                            <input type='text' className='input-material__input' name='url' onChange={handleInput} required />
                            <label className='input-material__label'>
                                <span className='input-material__text'>Url</span>
                            </label>
                        </div>

                        <button type='submit' className="modal__button">Add Associate</button>
                    </form>

                </div>
            </div>
        </Portal>
  )
}

export default AssociateNewModal
