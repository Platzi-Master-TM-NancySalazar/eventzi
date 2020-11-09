import React from 'react'

const Input = ({ text = 'sample', event }) => {
  return (
    <div className='input-material'>
      <input type='text' className='input-material__input' name={text} onChange={event} required/>
      <label className='input-material__label'>
        <span className='input-material__text'>{text}</span>
      </label>
    </div>
  )
}
const InputDate = ({ text = 'sample', event }) => {
  return (
    <div className='input-material'>
      <input type='datetime-local' className='input-material__input' name={text} onChange={event} required/>
      <label className='input-material__label'>
        <span className='input-material__text-date'>{text}</span>
      </label>
    </div>
  )
}

export default Input
export {
  InputDate
}
