import React, { useState } from 'react'
import { HiCog, HiOutlinePlusCircle } from 'react-icons/hi'
import PopupFirst from './PopupFirst'
import AddOrganizator from './AddOrganizator'
import ApiEventzi from '../utils/ApiEventzi'

const Organizers = () => {
  const [Omodal, setOmodal] = useState(false)

  const handleOpenModal = () => {
    setOmodal(!Omodal)
  }

  const [badge, setBadge] = useState([])

  React.useEffect(() => {
    if (badge.length === 0) {
      ApiEventzi.getOrganizers()
        .then(response => {
          const newBadge = response.data.data
          setBadge(newBadge)
        })
        .catch((error) => console.log(error))
    }
  }, [badge])

  const handleDelete = (id_user_event) => {
    ApiEventzi.deleteOrganizers(id_user_event)
      .then((response) => {
        if (response.status === 200) {
          setBadge([])
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <button onClick={handleOpenModal} className='button small'>
        <HiOutlinePlusCircle className='button__icon' />Add Organizator
      </button>
      {Omodal && <PopupFirst evenChange={handleOpenModal} setBadge={setBadge} />}

      <div className='second--main'>
        <div className='second--main-table'>
          <p className='title-name'>Name</p>
          <p className='title-email'>Email</p>
          <p className='title-event'>Event</p>
          <HiCog className="icon-ajustes" />
        </div>
        <div className='second--main-content'>

          <AddOrganizator badges={badge} handleDelete={handleDelete} />

        </div>
      </div>
    </>
  )
}

export default Organizers
