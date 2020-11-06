import React from 'react'
import Portal from './Portal'

const Modal = ({ modalClose }) => {
  return (
    <Portal>
      <div className='modal'>
        <div className='modal_container'>
          <button onClick={modalClose}>Cerrar</button>
          <h3>Esto es un modal</h3>
        </div>
      </div>
    </Portal>
  )
}

export default Modal
