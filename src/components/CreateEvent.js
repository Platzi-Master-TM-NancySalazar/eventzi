import React, { useState } from 'react'
import Input, { InputDate } from './Input'
import temp1 from '../assets/static/temp1.png'
import temp2 from '../assets/static/temp2.png'
import upload from '../assets/static/upload.png'

const CreateEvent = ({ submit }) => {
  const [state, setState] = useState({
    file: '',
    event_logo: upload,
    event_banner: upload
  })
  const [form, setForm] = useState({})

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleClick = () => {
    submit(form)
  }

  const handleImgChange = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    const nameEvent = event.target.name

    reader.onloadend = function () {
      setState({
        ...state,
        [nameEvent]: reader.result
      })
    }
    reader.readAsDataURL(file)
  }

  return (
    <div>
      <form className="events__form">
        <div>
          <Input text="name" event={handleChange} />
          <label htmlFor="type">Type: </label>
          <select id="type" text="type" onChange={handleChange}>
            <option value="Online">Online</option>
            <option value="Presential">Presential</option>
            <option value="Mixed">Mixed</option>
          </select>
          <Input text="description" event={handleChange} />
          <Input text="url" event={handleChange} />

          <InputDate text="date" event={handleChange} />
        </div>
        <div>
          <p>Select Template:</p>
          <input
            type="radio"
            name="template"
            value="Template 1"
            text="template"
            required
            onChange={handleChange}
          />
          <img src={temp1} alt="Template 1" className="img-template" />
          <input
            type="radio"
            name="template"
            value="Template 2"
            text="template"
            onChange={handleChange}
          />
          <img src={temp2} alt="Template 2" className="img-template" />
        </div>
        <div className='events__upload-container'>
          <label>
            <img className="events__upload" src={state.event_logo} alt="Load logo" />
            <input name='event_logo' type="file" className="events__upload-input" text="logo" onChange={handleImgChange} />
          </label>
          <span className="events__upload-text" >Event Logo</span>
          <label>
            <img className="events__upload" src={state.event_banner} alt="Load banner" />
            <input name='event_banner' type="file" className="events__upload-input" text="banner" onChange={handleImgChange} />
          </label>
          <span className="events__upload-text" >Event Banner</span>
        </div>
      </form>
      <div className="events__save-area">
        <button onClick={handleClick} className="button small">
          Create event
        </button>
      </div>
    </div>
  )
}
export default CreateEvent
