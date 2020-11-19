import React, { useEffect, useState } from 'react'
import ApiEventzi from '../utils/ApiEventzi'
import AssociateNewModal from './AssociateNewModal'
import EditAssociateModal from './EditAssociateModal'
import Portal from '../components/Portal'
import { MdClose, MdEdit, MdAddCircleOutline } from 'react-icons/md'

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

  const associateModalInfo = editAssociate[1]

  return (
    <Portal>
      <div className="modal">
        <div className="modal__container">
          <div className="modal__container-header">
            <h2>{title}</h2>
            <MdClose className="modal__container--close" onClick={associateClose} />
          </div>
          {associates.length === 0
            ? <p>No associate added</p>
            : associates.map(associate => {
              return (
                <>
                  <div className="options__modal">
                    <p className="options__modal-name" key={associate.name}>{associate.name_}</p>
                    <button className="button small" onClick={() => { handleEditAssociate(associate) }}>Edit <MdEdit /> </button>
                  </div>
                </>
              )
            })
          }
          <div className='modal__button-add'>
            <button className="button small" onClick={() => handleNewAssociate()}>Add new associate <MdAddCircleOutline /></button>
          </div>
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
  )
}

export default AssociateModal
