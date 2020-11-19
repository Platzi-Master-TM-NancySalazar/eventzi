import React from 'react'

const Select = ({ badges }) => {
  console.log('componente select', badges)
  return (
        <>
            {badges.map((data) => {
              return (
                    <select className='popup--details-select' key={data.id_event_}>
                        <option>Select event</option>
                        <option>{data.event_name}</option>
                    </select>
              )
            })}

            {/* <select>
                <option>Select</option>
                {badges.map(date => {
                    return(
                        <option key={date.id_event_}>{date.event_name}</option>
                    )
                })}
            </select> */}
        </>
  )
}

export default Select
