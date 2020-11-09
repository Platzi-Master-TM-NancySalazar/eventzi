import React, { useState } from 'react'
import logo_white from '../assets/static/logo-white.svg'
import Event from './OrganizationEvent'

import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdMoreHoriz,
} from 'react-icons/md'

const Organization = ({ id_organization, organization_name }) => {
  const [openEvents, setOpenEvents] = useState(false)

  const handleChange = () => {
    setOpenEvents(!openEvents)
  }

  return (
    <>
      <div className={`events_organization ${openEvents && 'events_organization-open'}`}>
        <div className='events_organization-header'>
          <figure className='events_container_logo'>
            <img src={logo_white} className='events_logo' />
          </figure>
          <h4 className='events_organization-title'>{organization_name}</h4>
        </div>
        <div>
          <button className='events_organization-button'>
            <MdMoreHoriz />
          </button>
          <button className='events_organization-button' onClick={handleChange}>
            {openEvents ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </button>
        </div>
      </div>
      <div className='organization-event__container'>
        {openEvents && <Event id_organization={id_organization} />}
      </div>
    </>
  )
}

export default Organization
