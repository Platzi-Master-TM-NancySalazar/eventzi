import React, { useEffect, useState } from 'react'
import ApiEventzi from '../utils/ApiEventzi'
import SpeakerNewModal from './SpeakerNewModal'
import EditSpeakerModal from './EditSpeakerModal'
import Portal from '../components/Portal'
import { MdClose, MdEdit, MdAddCircleOutline } from 'react-icons/md'

const SpeakerModal = ({ speakerClose, title, id }) => {
  const [speakers, setSpeakers] = useState([])
  const [addNewSpeaker, setAddNewSpeaker] = useState(false)
  const [editSpeaker, setEditSpeaker] = useState([])

  useEffect(() => {
    ApiEventzi.getSpeakers(id)
      .then(response => {
        setSpeakers(response.data.data)
      })
  }, [])

  const handleNewSpeaker = () => {
    setAddNewSpeaker(true)
  }

  const handleEditSpeaker = (speaker) => {
    setEditSpeaker([true, speaker])
  }

  const addNewSpeakerClose = () => {
    setAddNewSpeaker(false)
  }

  const editSpeakerClose = () => {
    setEditSpeaker(false)
  }

  const speakerModalInfo = editSpeaker[1]

  return (
    <Portal>
      <div className="modal">
        <div className="modal__container">
          <div className="modal__container-header">
            <h2>{title}</h2>
            <MdClose className="modal__container--close" onClick={speakerClose} />
          </div>

          {speakers.length === 0
            ? <>
              <p>No speaker added</p>
            </>
            : speakers.map(speaker => {
              return <div className="options__modal" key={speaker.id_speaker}>
                <p className="options__modal-name" key={speaker.id_speaker}>{speaker.fullname}</p>
                <button className="button small" onClick={() => { handleEditSpeaker(speaker) }}>Edit <MdEdit /> </button>
              </div>
            })
          }
          <div className='modal__button-add'>
            <button className="button small" onClick={() => handleNewSpeaker()}>Add new speaker <MdAddCircleOutline /></button>
          </div>

          {addNewSpeaker && (
            <SpeakerNewModal
              title='Add new speaker'
              id={id}
              addNewSpeakerClose={addNewSpeakerClose}
            />
          )}

          {editSpeaker[0] === true && (
            <EditSpeakerModal
              title='Edit Speaker'
              id={id}
              editSpeakerClose={editSpeakerClose}
              speakerModalInfo={speakerModalInfo}
            />
          )}

        </div>
      </div>
    </Portal>
  )
}

export default SpeakerModal
