import React, { useEffect, useState } from "react";
import Input from '../components/input'
import Portal from "../components/Portal";
import { MdClose } from "react-icons/md";
import ApiEventzi from '../utils/ApiEventzi'

const EditSpeakerModal = (props) => {
    const { title, id, speakerModalInfo, editSpeakerClose } = props
    console.log('props edit speaker', props)
    let { id_speaker } = speakerModalInfo

    const [fullname, setFullname] = useState(speakerModalInfo.fullname)
    const [bio, setBio] = useState(speakerModalInfo.bio)
    const [role_, setRole_] = useState(speakerModalInfo.role_)
    const [twitter, setTwitter] = useState(speakerModalInfo.twitter)
    const [description, setDescription] = useState(speakerModalInfo.description)

    let form = {
        fullname,
        bio,
        role_,
        twitter
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

    //Corregir, enviar el id del speaker no del evento
    const editSpeaker = (form) => {
        console.log('form', form)
        ApiEventzi.putSpeaker(id_speaker, form)
            .then(console.log)
    }


    return (
        <Portal>
            <div className="modal">
                <div className="modal__container">
                    <div className="modal__container-header">
                        <h3>{title}</h3>
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
                            <input type='text' className='input-material__input' name='description' value={description} onChange={(e) => setDescription(e.target.value)} required />
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



                        <button type='submit'>Save Speaker Changes</button>
                    </form>


                </div>
            </div>
        </Portal>
    );
};

export default EditSpeakerModal;