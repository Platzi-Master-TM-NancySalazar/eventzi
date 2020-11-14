import React, { useEffect, useState } from "react";
import ApiEventzi from '../utils/ApiEventzi'
import Portal from "../components/Portal";
import { MdClose, MdUnfoldLess } from "react-icons/md";

const AssociateModal = ({ associateClose, title, id }) => {
    const [associates, setAssociates] = useState([])
    console.log('llega id', id)

    useEffect(() => {
        ApiEventzi.getPartners(id)
            .then(response => {
                // partners = response.data.data
                setAssociates(response.data.data)
            })
    }, [])
    return (
        <Portal>
            <div className="modal">
                <div className="modal__container">
                    <div className="modal__container-header">
                        <h3>{title}</h3>
                        <button className="modal__container--close" onClick={associateClose}>
                            <MdClose />
                        </button>
                    </div>
                    {/* <div>{content}</div> */}
                    {associates.length === 0
                        ?
                        <p>No associate added</p>
                        :
                        associates.map(associate => {
                            return (
                                <>
                                    <p>{associate.name_}</p>
                                    <p>{associate.url}</p>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </Portal>
    );
};

export default AssociateModal;