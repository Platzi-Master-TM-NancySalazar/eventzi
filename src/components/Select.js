import React from 'react'

const Select = ({ badges }) => {
  console.log('componente select', badges)
  return (
        <>
<<<<<<< HEAD
            {/* {badges.map((data)=>{
                return(
=======
            {badges.map((data) => {
              return (
>>>>>>> e8143cf6c187a2df9f71d74a8526defae8522226
                    <select className='popup--details-select' key={data.id_event_}>
                        <option>Select event</option>
                        <option>{data.event_name}</option>
                    </select>
<<<<<<< HEAD
                )
            })} */}
=======
              )
            })}
>>>>>>> e8143cf6c187a2df9f71d74a8526defae8522226

            <select>
                <option>Select</option>
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
