import React, { useState } from 'react'
import { HiCog } from "react-icons/hi";
import { HiOutlinePlusCircle } from "react-icons/hi";
import PopupFirst from './PopupFirst';
import AddOrganizator from './AddOrganizator';
import ApiEventzi from '../utils/ApiEventzi';

const Organizers = () => {

  const [Omodal, setOmodal] = useState(false)

  const handleOpenModal = () => {
    setOmodal(!Omodal)
  }

  const [badge, setBadge] = useState([])

  React.useEffect(() => {
    ApiEventzi.getOrganizers()
    .then(response => {
      let newBadge = response.data.data
      setBadge(newBadge)
    })
    .catch((error) => console.log(error))
  },[])

  return (
    <>
      <div className='main--container-buttons'>
        <button onClick={handleOpenModal}>
          <HiOutlinePlusCircle className='icon-add-outline' />Add Organizator
        </button>
        {Omodal ? <PopupFirst evenChange={handleOpenModal}/> : null}
      </div>
      <div className='second--main'>
        <div className='second--main-table'>
          <div className='check'>
            <input type='checkbox' />
            <p>Id</p>
          </div>
          <p className='content-name'>Name</p>
          <p className='content-email'>Email</p>
          <p className='content-event'>Event</p>
          <HiCog className="icon-ajustes" />
        </div>
        <div className='second--main-content'>

          <AddOrganizator badges={badge} />


        </div>
      </div>
      <div className='show--details'>
        <div>
          <select className='select'>
            <option value='value1' selected>
              10
            </option>
            <option value='value2'>15</option>
            <option value='value3'>20</option>
          </select>
          <small>entries per page</small>
        </div>
      </div>
    </>
  )
}

export default Organizers
