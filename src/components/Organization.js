import React from 'react'
import logo_white from '../assets/static/logo-white.svg'

import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdMoreHoriz,
} from 'react-icons/md'

const Organization = ({ id_organization, organization_name }) => {
  return (
    <div className='events_organization'>
      <div>
        <figure className='events_container_logo'>
          <img src={logo_white} className='events_logo' />
        </figure>
        <h4 className='events_organization-title'>{organization_name}</h4>
      </div>
      <div>
        <button>
          <MdMoreHoriz />
        </button>
        <button>
          <MdKeyboardArrowDown />
        </button>
      </div>
    </div>
  )
}

export default Organization
