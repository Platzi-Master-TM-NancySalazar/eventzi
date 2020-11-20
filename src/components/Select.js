import React from 'react'

const Select = ({ badges }) => {
  console.log('componente select', badges)
  return (
        <>
            <select className='popup__sleect'>
                <option>Select event</option>
                {badges.map(date => {
                    return(
                        <option key={date.id_event_}>{date.event_name}</option>
                    )
                })}
            </select>
        </>
  )
}

export default Select
