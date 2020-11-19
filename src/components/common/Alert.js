import React, { useEffect } from 'react'

import {
  MdCheckCircle,
  MdErrorOutline,
  MdWarning
} from 'react-icons/md'

const Alert = ({ show, type, message }) => {
  useEffect(() => {
  }, [show])
  return (
    <div className={`alert__container ${show && 'active'} ${type}`}>
      {
        type === 'error' && <MdErrorOutline className='alert__icon error' />
      }
      {
        type === 'warning' && <MdWarning className='alert__icon warning' />
      }
      {
        type === 'success' && <MdCheckCircle className='alert__icon success' />
      }
      <div>
        <h3 className={`alert__title ${type}`}>{type}</h3>
        <p className={`alert__message ${type}`}>{message}</p>
      </div>
    </div>
  )
}

export default Alert
