import React from 'react'
import Input from './input'
import redes from '../assets/static/redes-sociales.png'
import upload from '../assets/static/upload.png'

const CreateOrganization = () => {
  return (
    <div className=''>
      <form className='events__form'>
        <div>
          <Input text='name' />
          <Input text='website' />
          <Input text='description' />
        </div>
        <div>
          <label for="file-input">
            <img className='events__upload' src={upload} alt='redes sociales' />
          </label>
          <input id="file-input" type='file' className='events__upload-input'/>
        </div>
      </form>

      <div className='events__logos'>
        <img className='events__logos-image' src={redes} alt='redes sociales' />
      </div>
      <div className='events__save-area'>
          <input
            type='submit'
            className='events_button'
            value='Create organization'
          />
        </div>
    </div>
  )
}
export default CreateOrganization
