import React, { useState } from 'react'
import Portal from '../components/Portal'
import { MdClose } from 'react-icons/md'
import Input, { InputDate } from '../components/Input'
import upload from '../assets/static/upload.png'
import temp1 from '../assets/static/temp1.png'
import temp2 from '../assets/static/temp2.png'
import ApiEventzi from '../utils/ApiEventzi'

const GeneralModal = (props) => {
  const { generalClose, title, id, generalModalInfo } = props

  const fechaRecibida = generalModalInfo[0].date_

  const formatDate = (fecha) => {
    fecha = fecha.split('T')
    let time = fecha[1].split('.')
    time = time[0].split(':')
    const formated = fecha[0] + 'T' + time[0] + ':' + time[1] + ':00'
    return formated
  }

  const fechaModificada = formatDate(fechaRecibida)

  const [event_name, setEvent_name] = useState(generalModalInfo[0].event_name)
  const [description_, setDescription] = useState(generalModalInfo[0].description_)
  const [url, setUrl] = useState(generalModalInfo[0].url)
  const [template, setTemplate] = useState(generalModalInfo[0].template)
  const [date_, setDate] = useState(fechaModificada)
  const [event_type, setType] = useState(generalModalInfo[0].event_type)

  console.log('asi me tira el type', event_type)

  const modifyDate = (fullDate) => {
    fullDate = fullDate.split('T')
    const formated = fullDate[0] + ' ' + fullDate[1] + ':00'
    return formated
  }

  const form = {
    event_name, description_, url, date_, template
  }

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { date_, description_, event_name, template, url, event_type } = form
    const newDate = modifyDate(date_)
    console.log(newDate)
    const data = {
      description_,
      event_name,
      template,
      url,
      date_: newDate,
      event_type
    }

    putGeneral(data)
  }

  const putGeneral = (data) => {
    console.log('data final', data)
    ApiEventzi.putGeneral(id, form)
      .then(console.log)
      .then(() => generalClose())
      .catch((err) => console.error(err))
  }

  return (
    <Portal>
      <div className="modal">
        <div className="modal__container">
          <div className="modal__container-header">
            <h2>{title}</h2>
            <MdClose className="modal__container--close" onClick={generalClose} />
          </div>

          <div>
            <form className="events__form" onSubmit={handleSubmit}>
              <div>

                {/* <Input text="name" event={handleChange} /> */}
                <div className='input-material'>
                  <input type='text' className='input-material__input' name='name' value={event_name} onChange={(e) => setEvent_name(e.target.value)} required />
                  <label className='input-material__label'>
                    <span className='input-material__text'>Event Name</span>
                  </label>
                </div>

                <div className="input-material">
                  <label htmlFor="type">Type: </label>
                  <select id="type" text="type" value={event_type} onChange={(e) => setType(e.target.value)}>
                    <option value="Presential">Presential</option>
                    <option value="Online">Online</option>
                    <option value="Mixed">Mixed</option>
                  </select>
                </div>

                {/* <Input text="description" event={handleChange} /> */}
                <div className='input-material'>
                  <input type='text' className='input-material__input' name='description' value={description_} onChange={(e) => setDescription(e.target.value)} required />
                  <label className='input-material__label'>
                    <span className='input-material__text'>Description</span>
                  </label>
                </div>

                {/* <Input text="url" event={handleChange} /> */}
                <div className='input-material'>
                  <input type='text' className='input-material__input' name='url' value={url} onChange={(e) => setUrl(e.target.value)} required />
                  <label className='input-material__label'>
                    <span className='input-material__text'>Url</span>
                  </label>
                </div>
                {/* <InputDate text="date" event={handleChange} /> */}
                <div className='input-material'>
                  <input type='datetime-local' className='input-material__input' name='date' value={date_} onChange={(e) => setDate(e.target.value)} required />
                  <label className='input-material__label'>
                    <span className='input-material__text-date'>Date</span>
                  </label>
                </div>

                <p>Select Template:</p>

                <input
                  type="radio"
                  name="template"
                  value="Template 1"
                  text="template"
                  checked={template === 'Template 1'}
                  required
                  onChange={(e) => setTemplate(e.target.value)}
                />
                <img src={temp1} alt="Template 1" className="img-template" />
                <input
                  type="radio"
                  name="template"
                  value="Template 2"
                  text="template"
                  checked={template === 'Template 2'}
                  onChange={(e) => setTemplate(e.target.value)}
                />
                <img src={temp2} alt="Template 2" className="img-template" />

              </div>

              <div className="events__save-area">
                <button type="submit" className="button small">
                  Save changes
                                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

    </Portal>
  )
}

export default GeneralModal
