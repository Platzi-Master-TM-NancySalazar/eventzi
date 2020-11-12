import React from 'react'

const Select = ({badges})=>{
    return(
        <>
            {badges.map((data)=>{
                return(
                    <select className='popup--details-select' key={badges.id_event_}>
                        <option>Select event</option>
                            <option >{data.event_name}</option>
                    </select>
                )
            })}
        </>
    )
}

export default Select