import React, { useState } from "react";
import Portal from "../components/Portal";
import { MdClose } from "react-icons/md";
import Input, { InputDate } from '../components/input'
import upload from '../assets/static/upload.png'
import temp1 from "../assets/static/temp1.png";
import temp2 from "../assets/static/temp2.png";

const GeneralModal = (props) => {
    const { generalClose, title, id, generalModalInfo } = props
    console.log('general modal props', props)
    //props que llegan: date_, description_, event_name, event_type, id_event_, id_organization, logo, status_, template, url

    //props que uso: event_name, event_type, status_, description_, url, date_

    // if (generalModalInfo[0].length === 0) {
    //     generalModalInfo[0].push(
    //         event_name = '',
    //         event_type = '',
    //         status_ = '',
    //         description = '',
    //         url = '',
    //         date_ = ''
    //     )
    // }

    const [eventName, setEventName] = useState(generalModalInfo[0].event_name || '')
    const [eventType, setEventType] = useState(generalModalInfo[0].event_type || '')
    const [status, setStatus] = useState(generalModalInfo[0].status_ || '')
    const [description, setDescription] = useState(generalModalInfo[0].description_ || '')
    const [url, setUrl] = useState(generalModalInfo[0].url || '')
    const [date, setDate] = useState(generalModalInfo[0].date_ || '')

    let form = {
        eventName, eventType, status, description, url, date
    }

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

                                {/* <Input text="name" event={handleChange} /> */}
                                <div className='input-material'>
                                    <input type='text' className='input-material__input' name='name' value={eventName} onChange={(e) => setEventName(e.target.value)} required />
                                    <label className='input-material__label'>
                                        <span className='input-material__text'>Event Name</span>
                                    </label>
                                </div>

                                {/* <Input text="type" event={handleChange} /> */}
                                <div className='input-material'>
                                    <input type='text' className='input-material__input' name='type' value={eventType} onChange={(e) => setEventType(e.target.value)} required />
                                    <label className='input-material__label'>
                                        <span className='input-material__text'>Event Type</span>
                                    </label>
                                </div>

                                {/* <Input text="status" event={handleChange} /> */}
                                <div className='input-material'>
                                    <input type='text' className='input-material__input' name='status' value={status} onChange={(e) => setStatus(e.target.value)} required />
                                    <label className='input-material__label'>
                                        <span className='input-material__text'>Satus</span>
                                    </label>
                                </div>

                                {/* <Input text="description" event={handleChange} /> */}
                                <div className='input-material'>
                                    <input type='text' className='input-material__input' name='description' value={description} onChange={(e) => setDescription(e.target.value)} required />
                                    <label className='input-material__label'>
                                        <span className='input-material__text'>Description</span>
                                    </label>
                                </div>

                                {/* <Input text="url" event={handleChange} /> */}
                                <div className='input-material'>
                                    <input type='text' className='input-material__input' name='url' value={url} onChange={(e) => setUrl(e.target.value)} required />
                                    <label className='input-material__label'>
                                        <span className='input-material__text'>Url</span>
                                    </label>
                                </div>

                                <p className="marginbtm">Date / Time</p>
                                {/* <InputDate text="date" event={handleChange} /> */}
                                <div className='input-material'>
                                    <input type='datetime-local' className='input-material__input' name='date' value={date} onChange={(e) => setDate(e.target.value)} required />
                                    <label className='input-material__label'>
                                        <span className='input-material__text-date'>Date</span>
                                    </label>
                                </div>



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