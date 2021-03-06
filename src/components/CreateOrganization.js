import React, { useState } from 'react'
import Input from './Input'
import redes from '../assets/static/redes-sociales.png'
import upload from '../assets/static/upload.png'

const CreateOrganization = ({ submit }) => {
  const [form, setForm] = useState({})

  const handleChange = (event) => {
    if (event.target.name === 'logo') {
      const logo = event.target.files[0]
      setForm({
        ...form,
        logo
      })
    } else {
      setForm({
        ...form,
        [event.target.name]: event.target.value
      })
    }
  }

  const handleClick = () => {
    submit(form)
  }

  return (
    <div className=''>
      <form className='events__form' id='myForm'>
        <div>
          <Input text='name' event={handleChange} />
          <Input text='website' event={handleChange} />
          <Input text='description' event={handleChange} />
        </div>
        <div>
          <label >
            <img className='events__upload' src={upload} alt='redes sociales' />
            <input id="file-input" type='file' className='events__upload-input' />
          </label>

        </div>
      </form>

      <div className='events__logos'>
        <img className='events__logos-image' src={redes} alt='redes sociales' />
      </div>
      <div className='events__save-area'>
        <button onClick={handleClick} className='button small'>
          Save Changes
        </button>
      </div>
    </div>
  )
}
export default CreateOrganization
