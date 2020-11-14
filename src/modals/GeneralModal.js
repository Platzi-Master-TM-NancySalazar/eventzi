import React from "react";
import Portal from "../components/Portal";
import { MdClose } from "react-icons/md";

// const SpeakerModal = ({ modalClose, title, content }) => {
const GeneralModal = () => {

    return (
        <Portal>
            <div className="modal">
                <div className="modal__container">
                    <div className="modal__container-header">
                        {/* <h3>{title}</h3> */}
                        {/* <button className="modal__container--close" onClick={modalClose}>
                            <MdClose />
                        </button> */}
                        <h1>General</h1>
                    </div>
                    {/* <div>{content}</div> */}
                </div>
            </div>
        </Portal>
    );
};

export default GeneralModal;