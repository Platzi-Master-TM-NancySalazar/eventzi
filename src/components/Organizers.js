import React, {useState} from 'react'
import { HiCog } from "react-icons/hi";
import { HiOutlinePlusCircle } from "react-icons/hi";
import PopupFirst from './PopupFirst';
import AddOrganizator from './AddOrganizator';

const Organizers = () => {
  const [Omodal, setOmodal] = useState(false)

  const handleOpenModal = () =>{
    setOmodal(!Omodal)
  }

  // Props para componente AddOrganizator
  const [badge, setBadge] = useState([{
      'id':'123',
      'name':'Francisco Araujo',
      'email':'pan.x92@gmail.com',
      'event':'Event 2020'
    },
    {
      'id':'234',
      'name':'Nancy Salazar',
      'email':'nancysalazar@platzi.com',
      'event':'Event 2021'
    },
    {
      'id':'387',
      'name':'Jairo Ramirez',
      'email':'trolljairo@gmail.com',
      'event':'Algun dia'
    }
  ])

  return (
    <>
    <div className='main--container-buttons'>
        <button onClick={handleOpenModal}>
          <HiOutlinePlusCircle className='icon-add-outline'/>Add Organizator
        </button>
        {Omodal ? <PopupFirst evenChange={handleOpenModal}/>: null}
      </div>
      <div className='second--main'>
        <div className='second--main-table'>
          <div className='check'>
            <input type='checkbox'/>
            <p>Id</p>
          </div>
          <p className='content-name'>Name</p>
          <p className='content-email'>Email</p>
          <p className='content-event'>Event</p>
          <HiCog className="icon-ajustes"/>
        </div>
        <div className='second--main-content'>

          <AddOrganizator badges={badge}/>

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
