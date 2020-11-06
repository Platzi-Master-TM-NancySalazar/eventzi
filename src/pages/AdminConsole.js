import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import { HiCog } from "react-icons/hi";
import { HiPencil } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import { HiTrash } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";



class Modal extends Component{
    render(){
      return ReactDOM.createPortal(
        <section class="overlay" id="overlay">
          <div class="popup--container-details" id="popup--container-details">
              <h1>Add Organizations to event</h1>
              <p>No trabajes solo, agrega organizadores al evento para que te den una mano</p>
              <div class="popup--details-form">
                  <input id="input_text" class="popup--input" type="text" placeholder="Escribe un nombre" autocomplete="off"/>
                  <span class="popup--input-focus"></span>
                  <button class="button-popup">Add</button>
              </div>
  
              <div class="newOrganizator">
                  <span class="icon-user-plus"></span>
                  <a href="#" id="newOrganizator">Add Jairo Ramirez Castaño as Organizer</a>
              </div>
              
              <div class="container--details">
                  <img src="https://lh3.googleusercontent.com/ogw/ADGmqu_ksm6Ql15mCzcSRiahXsgeljHqXoPqOfDWWnlo=s32-c-mo" alt=""/>
                  <p>Jairo Ramirez Castaño</p>
                  <a href="#"><span class="icon-close-outline"></span></a>
              </div>
              <div class="section-close">
                  <div></div>
                  <button class="button--popup-close" id="btn-popup-close">Close</button>
              </div>
          </div>
      </section>, document.getElementById('modal')
      )
    }
  }

  
const AdminConsole = () => {

    const [option, setOption] = useState()

    const handleOption = (selectOption) => {
        console.log(selectOption)
    }

    state={Modalpopup:false}

    openModal = () => this.setState({
        Modalpopup:true
    })

    closeModal = () => this.setState({
        Modalpopup:false
    })

    return(
        <main className='main--container'>
            <section className="main--container-list">
                <div className="main--container-buttons">
                    <button onClick={this.openModal}><HiSearch className="icon-add-outline"/>Add Organizator</button>
                    {this.state.Modalpopup &&
                        <Modal onClose={this.closeModal}/>
                    }
                    <span className="icon-search"><input type="text" placeholder="Search" className="main--input-search"/></span>
                </div>
                <div className="second--main">
                    <div className="second--main-table">
                        <input type="checkbox"/>
                        <p>Id</p>
                        <p>Name</p>
                        <p>Email</p>
                        <HiCog className="icon-ajustes"/>
                    </div>
                    <div className="second--main-content">
                        <div className="second--main-details">
                            <input type="checkbox"/>
                            <p>112</p>
                            <p>Francisco Araujo</p>
                            <p>pan.x92@gmail.com</p>
                            <div>
                                <a href="#"><HiPencil className="icon-details"/></a>
                                <a href="#"><HiOutlineTrash className="icon-details"/></a>
                            </div>
                        </div>
                        <div className="second--main-details">
                            <input type="checkbox"/>
                            <p>10</p>
                            <p>Nancy Salazar</p>
                            <p>nancysalazar@platzi.com</p>
                            <div>
                            <a href="#"><HiPencil className="icon-details"/></a>
                                <a href="#"><HiOutlineTrash className="icon-details"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="show--details">
                    <div>
                        <select className="select">
                            <option value="value1" selected>10</option> 
                            <option value="value2">15</option>
                            <option value="value3">20</option>
                        </select>
                        <small>entries per page</small>
                    </div>
                    <div>
                        <button><img src="./Images/icons/boton-de-flecha-izquierda-del-teclado.svg" alt="" className="icon-details"/></button>
                        <input type="text" value="1" className="input-page-value"/>
                        <button><img src="./Images/icons/flecha-derecha.svg" alt="" className="icon-details"/></button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AdminConsole
