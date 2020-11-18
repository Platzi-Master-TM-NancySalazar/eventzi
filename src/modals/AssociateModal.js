import React, { useEffect, useState } from "react";
import ApiEventzi from '../utils/ApiEventzi'
import AssociateNewModal from './AssociateNewModal'
import EditAssociateModal from './EditAssociateModal'
import Portal from "../components/Portal";
import { MdClose, MdEdit, MdAddCircleOutline } from "react-icons/md";

const AssociateModal = ({ associateClose, title, id }) => {
    const [associates, setAssociates] = useState([])
    const [addNewAssociate, setAddNewAssociate] = useState(false)
    const [editAssociate, setEditAssociate] = useState([])

    useEffect(() => {
        ApiEventzi.getPartners(id)
            .then(response => {
                setAssociates(response.data.data)
            })
    }, [])

    const handleNewAssociate = () => {
        setAddNewAssociate(true)
    }

    const handleEditAssociate = (associate) => {
        setEditAssociate([true, associate])
    }

    const addNewAssociateClose = () => {
        setAddNewAssociate(false)
    }

    const editAssociateClose = () => {
        setEditAssociate(false)
    }

    let associateModalInfo = editAssociate[1]

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
                    {associates.length === 0
                        ?
                        <p>No associate added</p>
                        :
                        associates.map(associate => {
                            return (
                                <>
                                    <div className="options__modal">
                                        <button className="modal__button" onClick={() => { handleEditAssociate(associate) }}>Edit <MdEdit /> </button>
                                        <p key={associate.name}>{associate.name_}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                    <button className="modal__button-add" onClick={() => handleNewAssociate()}>Add new associate <MdAddCircleOutline /></button>


                    {addNewAssociate && (
                        <AssociateNewModal
                            title='Add new associate'
                            id={id}
                            addNewAssociateClose={addNewAssociateClose}
                        />
                    )}

                    {editAssociate[0] === true && (
                        <EditAssociateModal
                            title='Edit associate'
                            id={id}
                            editAssociateClose={editAssociateClose}
                            associateModalInfo={associateModalInfo}
                        />
                    )}

                </div>
            </div>
        </Portal>
    );
};

export default AssociateModal;