import React, { useEffect, useState } from "react";
import Input from '../components/input'
import Portal from "../components/Portal";
import { MdClose } from "react-icons/md";
import ApiEventzi from '../utils/ApiEventzi'
import FormatDate from '../utils/FormatDate'

const EditSpeakerModal = (props) => {
    console.log('editSpeaker ver como llega la fecha', props.speakerModalInfo)
    const { id, speakerModalInfo, editSpeakerClose } = props
    let { id_speaker } = speakerModalInfo



    // console.log('fecha', goodDate)

    const [fullname, setFullname] = useState(speakerModalInfo.fullname)
    const [bio, setBio] = useState(speakerModalInfo.bio)
    const [role_, setRole_] = useState(speakerModalInfo.role_)
    const [twitter, setTwitter] = useState(speakerModalInfo.twitter)
    const [title, setTitle] = useState(speakerModalInfo.title)
    const [description_, setDescription] = useState(speakerModalInfo.description_)
    const [date_, setDate] = useState(() => {
        if (speakerModalInfo.date_ > 0) {
            return FormatDate(speakerModalInfo.date_)
        } else {
            return speakerModalInfo.date_
        }
    })


    let form = {
        fullname,
        bio,
        role_,
        twitter,
        title,
        description_,
        date_
    }

    const handleInput = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        editSpeaker(form)
    }

    const editSpeaker = (form) => {
        console.log('editSpeaker form', form)
        console.log('form', form)
        console.log('id speaker', id_speaker)
        ApiEventzi.putSpeaker(id_speaker, form)
            .then(() => editSpeakerClose())
    }


    return (
        <Portal>
            <div className="modal">
                <div className="modal__container">
                    <div className="modal__container-header">
                        <h3>Edit speaker</h3>
                        <button className="modal__container--close" onClick={editSpeakerClose}>
                            <MdClose />
                        </button>
                    </div>
                    <form className='events__form' onSubmit={handleSubmit}>
                        <div className='input-material'>
                            <input type='text' className='input-material__input' name='name' value={fullname} onChange={(e) => setFullname(e.target.value)} required />
                            <label className='input-material__label'>
                                <span className='input-material__text'>Fullname</span>
                            </label>
                        </div>

                        <div className='input-material'>
                            <input type='text' className='input-material__input' name='rol' value={role_} onChange={(e) => setRole_(e.target.value)} required />
                            <label className='input-material__label'>
                                <span className='input-material__text'>Rol</span>
                            </label>
                        </div>



                        <div className='input-material'>
                            <input type='text' className='input-material__input' name='description' value={description_} onChange={(e) => setDescription(e.target.value)} required />
                            <label className='input-material__label'>
                                <span className='input-material__text'>Description</span>
                            </label>
                        </div>

                        <div className='input-material'>
                            <input type='text' className='input-material__input' name='twitter' value={twitter} onChange={(e) => setTwitter(e.target.value)} required />
                            <label className='input-material__label'>
                                <span className='input-material__text'>Twitter</span>
                            </label>
                        </div>

                        <div className='input-material'>
                            <input type='text' className='input-material__input' name='bio' value={bio} onChange={(e) => setBio(e.target.value)} required />
                            <label className='input-material__label'>
                                <span className='input-material__text'>Bio</span>
                            </label>
                        </div>

                        <div className="input-material"></div>

                        <div className='input-material'>
                            <input type='datetime-local' className='input-material__input' id="meeting-time" name='date_' value={date_} onChange={(e) => setDate(e.target.value)} required />
                            <label className='input-material__label'>
                                <span className='input-material__text-date'>Date</span>
                            </label>
                        </div>

                        <div className='input-material'>
                            <input type='text' className='input-material__input' name='title_' value={title} onChange={(e) => setTitle(e.target.value)} required />
                            <label className='input-material__label'>
                                <span className='input-material__text'>Title of the talk</span>
                            </label>
                        </div>

                        <button type='submit' className="modal__button">Save Speaker Changes</button>
                    </form>


                </div>
            </div>
        </Portal>
    );
};

export default EditSpeakerModal;