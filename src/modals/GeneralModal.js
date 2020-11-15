import React, { useState } from "react";
import Portal from "../components/Portal";
import { MdClose } from "react-icons/md";
import Input, { InputDate } from '../components/input'
import upload from '../assets/static/upload.png'
import temp1 from "../assets/static/temp1.png";
import temp2 from "../assets/static/temp2.png";

const GeneralModal = ({ generalClose, title, id }) => {
    const [form, setForm] = useState({})

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    const handleClick = () => {
        console.log(form)
    }

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

                    <div>
                        <form className="events__form">
                            <div>
                                <Input text="name" event={handleChange} />
                                <Input text="type" event={handleChange} />
                                <Input text="status" event={handleChange} />
                                <Input text="description" event={handleChange} />
                                <Input text="url" event={handleChange} />
                                <p className="marginbtm">Date / Time</p>
                                <InputDate text="date" event={handleChange} />
                                <p>Select Template:</p>
                                <input
                                    type="radio"
                                    name="template"
                                    value="Template 1"
                                    text="template"
                                    required
                                    onChange={handleChange}
                                />
                                <img src={temp1} alt="Template 1" className="img-template" />
                                <input
                                    type="radio"
                                    name="template"
                                    value="Template 2"
                                    text="template"
                                    onChange={handleChange}
                                />
                                <img src={temp2} alt="Template 2" className="img-template" />
                            </div>
                            <div>
                                <label>
                                    <img className="events__upload" src={upload} alt="Load logo" />
                                    <input
                                        type="file"
                                        className="events__upload-input"
                                        text="logo"
                                    />
                                </label>
                                <label>
                                    <img className="events__upload" src={upload} alt="Load banner" />
                                    <input
                                        type="file"
                                        className="events__upload-input"
                                        text="banner"
                                    />
                                </label>
                            </div>
                        </form>
                        <div className="events__save-area">
                            <button onClick={handleClick} className="events_button">
                                Save changes
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </Portal>
    );
};

export default GeneralModal;