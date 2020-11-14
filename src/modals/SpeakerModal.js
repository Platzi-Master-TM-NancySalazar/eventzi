import React, { useEffect, useState } from "react";
import ApiEventzi from '../utils/ApiEventzi'
import Portal from "../components/Portal";
import { MdClose } from "react-icons/md";

const SpeakerModal = ({ speakerClose, title, id }) => {
    const [speakers, setSpeakers] = useState([])

    useEffect(() => {
        ApiEventzi.getSpeakers(id)
            .then(response => {
                setSpeakers(response.data.data)
            })
    }, [])

    return (
        <Portal>
            <div className="modal">
                <div className="modal__container">
                    <div className="modal__container-header">
                        <h3>{title}</h3>
                        <button className="modal__container--close" onClick={speakerClose}>
                            <MdClose />
                        </button>
                    </div>
                    {/* <div>{content}</div> */}

                    {speakers.length === 0
                        ?
                        <p>No speaker added</p>
                        :
                        speakers.map(speaker => {
                            return (
                                <>
                                    <p>{speaker.bio}</p>
                                    <p>{speaker.fullname}</p>
                                    <p>{speaker.role_}</p>
                                    <p>{speaker.twitter}</p>

                                </>
                            )
                        })
                    }

                </div>
            </div>
        </Portal>
    );
};

export default SpeakerModal;