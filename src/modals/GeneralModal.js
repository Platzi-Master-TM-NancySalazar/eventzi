import React from "react";
import Portal from "../components/Portal";
import { MdClose } from "react-icons/md";

const GeneralModal = ({ generalClose, title, id }) => {

    return (
        <Portal>
            <div className="modal">
                <div className="modal__container">
                    <div className="modal__container-header">
                        <h3>{title}</h3>
                        <button className="modal__container--close" onClick={generalClose}>
                            <MdClose />
                        </button>
                    </div>
                    {/* <div>{content}</div> */}
                </div>
            </div>
        </Portal>
    );
};

export default GeneralModal;