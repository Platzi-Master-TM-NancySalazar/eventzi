import React from 'react'

const Select = ({ name, badges, handleChange }) => {
  return (
    <>
      <select name={name} className='popup__select' onChange={handleChange}>
        <option value=''>Select event</option>
        {badges.map(date => {
          return (
            <option value={date.id_event_} key={date.id_event_} >{date.event_name}</option>
          )
        })}
      </select>
    </>
  )
}

export default Select
