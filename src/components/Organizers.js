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

<<<<<<< HEAD
  const [badge, setBadge] = useState([])
=======
  const [badge, setBadge] = useState('')
>>>>>>> c1198238db90025602f6cea14d265b6ce3fe6d14

  React.useEffect(() => {
    ApiEventzi.getOrganizers(25)
<<<<<<< HEAD
    .then(response => {
      let newBadge = response.data.data
      setBadge(newBadge)
    })
    .catch((error) => console.log(error))
  },[])
=======
      .then(response => {
        console.log('info', response.data.data)
        let newBadge = response.data.data
        setBadge(newBadge)
      })
  }, [])
>>>>>>> c1198238db90025602f6cea14d265b6ce3fe6d14

  return (
    <>
      <div className='main--container-buttons'>
        <button onClick={handleOpenModal}>
          <HiOutlinePlusCircle className='icon-add-outline' />Add Organizator
        </button>
        {Omodal ? <PopupFirst evenChange={handleOpenModal} /> : null}
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

<<<<<<< HEAD
          <AddOrganizator badges={badge}/>
=======
          <AddOrganizator badges={badge} />

>>>>>>> c1198238db90025602f6cea14d265b6ce3fe6d14

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
