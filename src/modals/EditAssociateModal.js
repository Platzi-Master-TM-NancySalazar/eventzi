import React, { useEffect, useState } from "react";
import Input from '../components/input'
import Portal from "../components/Portal";
import { MdClose } from "react-icons/md";
import ApiEventzi from '../utils/ApiEventzi'

const EditAssociateModal = (props) => {
    const { title, id, associateModalInfo, editAssociateClose } = props
    let { id_partner } = associateModalInfo

    const [name_, setName] = useState(associateModalInfo.name_)
    const [url, setUrl] = useState(associateModalInfo.url)

    let form = {
        name_,
        url
    }

    const handleInput = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        editAssociate(form)
    }

    const editAssociate = (form) => {
        console.log('form', form)
        ApiEventzi.putAssociate(id_partner, form)
            .then(() => editAssociateClose())
    }


    return (
        <Portal>
            <div className="modal">
                <div className="modal__container">
                    <div className="modal__container-header">
                        <h3>{title}</h3>
                        {/* <h3>{event_name}</h3> */}
                        <button className="modal__container--close" onClick={editAssociateClose}>
                            <MdClose />
                        </button>
                    </div>
                    <form className='events__form' onSubmit={handleSubmit}>
                        <div className='input-material'>
                            <input type='text' className='input-material__input' name='name_' value={name_} onChange={(e) => setName(e.target.value)} required />
                            <label className='input-material__label'>
                                <span className='input-material__text'>Fullname</span>
                            </label>
                        </div>

                        <div className='input-material'>
                            <input type='text' className='input-material__input' name='bio' value={url} onChange={(e) => setUrl(e.target.value)} required />
                            <label className='input-material__label'>
                                <span className='input-material__text'>Url</span>
                            </label>
                        </div>

                        <button type='submit' className="modal__button">Save Associate Changes</button>
                    </form>


                </div>
            </div>
        </Portal>
    );
};

export default EditAssociateModal;