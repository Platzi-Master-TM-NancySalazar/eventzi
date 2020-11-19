import React, { useEffect, useState } from 'react'

const Input = ({ text = 'sample', type = 'text', event }) => {
  const [state, setState] = useState('')
  useEffect(() => {
    if (type === 'date') {
      const date = new Date()
      setState(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
    }
  }, [])

  return (
    <div className='input-material'>
      <input type={type} defaultValue={state} className='input-material__input' name={text} onChange={event} required />
      <label className='input-material__label'>
        <span className='input-material__text'>{text}</span>
      </label>
    </div>
  )
}
const InputDate = ({ text = 'sample', event }) => {
  return (
    <div className='input-material'>
      <input type='datetime-local' className='input-material__input' name={text} onChange={event} required />
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
