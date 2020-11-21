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
  const d = new Date()
  let f = {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate() >= 10 ? d.getDate() : `0${d.getDate()}`,
    hours: d.getHours(),
    minutes: d.getMinutes() >= 10 ? d.getMinutes() : `0${d.getMinutes()}`
  }
  f = `${f.year}-${f.month}-${f.day}T${f.hours}:${f.minutes}`
  return (
    <div className='input-material'>
      <input type='datetime-local' defaultValue={f} className='input-material__input' name={text} onChange={event} required />
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
