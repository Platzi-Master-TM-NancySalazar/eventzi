import React from 'react'

const Tooltip = ({ children, text = 'tooltip' }) => {
  return (
    <div className='tooltip'>
      {children}
      <span className='tooltip__text'>
        {text}
      </span>
    </div>
  )
}

export default Tooltip
