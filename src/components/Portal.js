import React from 'react'
import ReactDom from 'react-dom'

const Portal = ({ children }) => {
  return (
    <>
      {ReactDom.createPortal(children, document.getElementById('modal'))}
    </>
  )
}

export default Portal
