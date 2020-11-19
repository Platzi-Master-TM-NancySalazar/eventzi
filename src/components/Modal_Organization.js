import React from 'react'
import Portal from './Portal'
import { MdClose } from 'react-icons/md'

const Modal = ({ modalClose, title, content }) => {
  return (
    <Portal>
      <div className="modal">
        <div className="modal__container">
          <div className="modal__container-header">
            <h2>{title}</h2>
            <MdClose onClick={modalClose} className="modal__container--close" />
          </div>
          <div>{content}</div>
        </div>
      </div>
    </Portal>
  )
}

export default Modal
