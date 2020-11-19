import React, { useState } from 'react'
import Portal from '../components/Portal'
import { MdClose } from 'react-icons/md'
import Input, { InputDate } from '../components/Input'
import upload from '../assets/static/upload.png'
import temp1 from '../assets/static/temp1.png'
import temp2 from '../assets/static/temp2.png'
import ApiEventzi from '../utils/ApiEventzi'

const GeneralModal = (props) => {
    const { generalClose, title, id, generalModalInfo } = props
    console.log('generalModalInfo props', generalModalInfo)

    const [event_name, setevent_name] = useState(generalModalInfo[0].event_name)
    const [event_type, setevent_type] = useState(generalModalInfo[0].event_type)
    // const [status_, setStatus] = useState(generalModalInfo[0].status_ || '')
    const [description_, setDescription] = useState(generalModalInfo[0].description_)
    const [url, setUrl] = useState(generalModalInfo[0].url)
    const [date_, setDate] = useState(generalModalInfo[0].date_)
    const [template, setTemplate] = useState(generalModalInfo[0].template)

    const form = {
        event_name, event_type, description_, url,
        date_,
        template
    }

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        putGeneral(form)
    }

    //Tengo que pasar de esto "2020-11-19T17:15:54.000Z"
    //A esto "2020-11-19T11:58"
    // let date_ = modifyDate(date) || ''

    const modifyDate = (date_) => {
        console.log('asi entra date', date)
        date = date.split('T', '.')
        let formated = date[0] + ' ' + date[1]
        console.log('formated', formated)
    }

    const putGeneral = (form) => {
        console.log(form)
        ApiEventzi.putGeneral(id, form)
            .then(console.log)
            .then(() => generalClose())
        // .catch((err) => console.error(err))
    }

    return (
        <Portal>
            <div className="modal">
                <div className="modal__container">
                    <div className="modal__container-header">
                        <h2>{title}</h2>
                        <MdClose className="modal__container--close" onClick={generalClose} />
                    </div>
                    {/* <div>{content}</div> */}

                    <div>
                        <form className="events__form" onSubmit={handleSubmit}>
                            <div>

                                {/* <Input text="name" event={handleChange} /> */}
                                <div className='input-material'>
                                    <input type='text' className='input-material__input' name='name' value={event_name} onChange={(e) => setevent_name(e.target.value)} required />
                                    <label className='input-material__label'>
                                        <span className='input-material__text'>Event Name</span>
                                    </label>
                                </div>

                                {/* <Input text="type" event={handleChange} /> */}
                                <div className='input-material'>
                                    <input type='text' className='input-material__input' name='type' value={event_type} onChange={(e) => setevent_type(e.target.value)} required />
                                    <label className='input-material__label'>
                                        <span className='input-material__text'>Event Type</span>
                                    </label>
                                </div>

                                {/* <Input text="status" event={handleChange} /> */}
                                {/* <div className='input-material'>
                                    <input type='text' className='input-material__input' name='status' value={status_} onChange={(e) => setStatus(e.target.value)} required />
                                    <label className='input-material__label'>
                                        <span className='input-material__text'>Satus</span>
                                    </label>
                                </div> */}

                                {/* <Input text="description" event={handleChange} /> */}
                                <div className='input-material'>
                                    <input type='text' className='input-material__input' name='description' value={description_} onChange={(e) => setDescription(e.target.value)} required />
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
                                    checked={template === 'Template 1'}
                                    required
                                onChange={(e) => setTemplate(e.target.value)}
                                />
                                <img src={temp1} alt="Template 1" className="img-template" />
                                <input
                                    type="radio"
                                    name="template"
                                    value="Template 2"
                                    text="template"
                                    checked={template === 'Template 2'}
                                onChange={(e) => setTemplate(e.target.value)}
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

                            <div className="events__save-area">
                                <button type="submit" className="button small">
                                    Save changes
                            </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </Portal>
    )
}

export default GeneralModal
