import React from 'react'

const Input = ({ text = 'sample' }) => {
  return (
    <div className='input-material'>
      <input type='text' className='input-material__input' required/>
      <label className='input-material__label'>
        <span className='input-material__text'>{text}</span>
      </label>
    </div>
  )
}

export default Input
