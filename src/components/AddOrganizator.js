import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import Tooltip from './common/Tooltip'

const AddOrganizator = ({ badges, handleDelete }) => {
  return (
    <>
      {badges.map((data) => {
        return (
          <div className='second__main-details' key={data.id_user_event}>
            <p className='content__name'>{data.full_name}</p>
            <p className='content__email'>{data.email}</p>
            <p className='content__event'>{data.event_name}</p>
            <div>
              <Tooltip text='Delete organizer'>
                <HiOutlineTrash className='icon-details' onClick={() => handleDelete(data.id_user_event)} />
              </Tooltip>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default AddOrganizator
