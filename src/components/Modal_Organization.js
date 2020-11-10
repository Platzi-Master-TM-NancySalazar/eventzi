import React from "react";
import Portal from "./Portal";
import { MdClose } from "react-icons/md";

const Modal = ({ modalClose, title, content }) => {
  return (
    <Portal>
      <div className="modal">
        <div className="modal__container">
          <div className="modal__container-header">
            <h3>{title}</h3>
            <button className="modal__container--close" onClick={modalClose}>
              <MdClose />
            </button>
          </div>
          <div>{content}</div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
