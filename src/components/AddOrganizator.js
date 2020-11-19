import React from 'react'
import { HiOutlineTrash, HiPencil } from 'react-icons/hi'

const AddOrganizator = ({ badges }) => {
  return (
        <>
            {badges.map((data) => {
              return (
                    <div className='second__main-details' key={data.id_user}>
                        <div className='check'>
                            <input type='checkbox'/>
                            <p>{data.id_user}</p>
                        </div>
                        <p className='content-name'>{data.full_name}</p>
                        <p className='content-email'>{data.email}</p>
                        <p className='content-event'>{data.event_name}</p>
                        <div>
                            <a href='#'><HiPencil className='icon-details-pencil'/></a>
                            <a href='#'><HiOutlineTrash className='icon-details'/></a>
                        </div>
                    </div>
              )
            })}
        </>
  )
}

export default AddOrganizator
