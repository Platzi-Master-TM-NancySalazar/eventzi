import React, {useState} from 'react'
import { HiCog } from "react-icons/hi";
import { HiPencil } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import { HiTrash } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
import { MdKeyboardArrowLeft } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/hi";
import { HiOutlinePlusCircle } from "react-icons/hi";
import PopupFirst from './PopupFirst'
// import ReactDOM from 'react-dom'
// import PruebaModal from './PruebaModal'


const Organizers = () => {
  const [Omodal, setOmodal] = useState(false)

  const handleOpenModal = () =>{
    console.log('boton activado')
    setOmodal(!Omodal)
  }

  return (
    <>
      <div className='main--container-buttons'>
        <button onClick={handleOpenModal}>
          <HiOutlinePlusCircle className='icon-add-outline'/>Add Organizator
        </button>
        {Omodal ? <PopupFirst evenChange={handleOpenModal}/>: null}
        {/* <PopupFirst evenChange={handleOpenModal}/> */}
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
          <div className='second--main-details'>
            <div className='check'>
              <input type='checkbox'/>
              <p>112</p>
            </div>
            <p className='content-name'>Francisco Araujo</p>
            <p className='content-email'>pan.x92@gmail.com</p>
            <p className='content-event'>Event 2020</p>
            <div>
              <a href='#'><HiPencil className='icon-details-pencil'/></a>
              <a href='#'><HiOutlineTrash className='icon-details'/></a>
            </div>
          </div>
          <div className='second--main-details'>
            <div className='check'>
              <input type='checkbox' />
              <p>10</p>
            </div>
            <p className='content-name'>Nancy Salazar</p>
            <p className='content-email'>nancysalazar@platzi.com</p>
            <p className='content-event'>Event 2021</p>
            <div>
              <a href='#'>
              <HiPencil className='icon-details-pencil'/>
              </a>
              <a href='#'>
              <HiOutlineTrash className='icon-details'/>
              </a>
            </div>
          </div>
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
        <div>
            {/* <MdKeyboardArrowLeft className='icon-details'/> */}
          {/* <button>
          </button> */}
          <input type='text' value='1' className='input-page-value' />
            {/* <MdKeyboardArrowRight className='icon-details'/> */}
          {/* <button>
          </button> */}
        </div>
      </div>
    </>
  )
}

export default Organizers
