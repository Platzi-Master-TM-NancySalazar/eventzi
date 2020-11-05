import React from 'react'
import SideBar from '../components/SideBar'
import LeftContainer from '../components/LeftContainer'

const AdminConsole = () => {

    // handleChange= ()=>{
    //     console.log('btn-addOrganizator')
    // }onClick={this.handleChange}

    return(
    <>
        <main className='main--container'>
            <SideBar/>
            {/* <LeftContainer/> */}
            <section className="main--container-list">
                <div className="main--container-buttons">
                    <button ><span className="icon-add-outline"></span>Add Organizator</button>
                    <span className="icon-search"><input type="text" placeholder="Search" className="main--input-search"/></span>
                </div>
                <div className="second--main">
                    <div className="second--main-table">
                        <input type="checkbox"/>
                        <p>Id</p>
                        <p>Name</p>
                        <p>Email</p>
                        <img src="./Images/icons/ajustes.svg" alt="configuration" className="icon-ajustes"/>
                    </div>
                    <div className="second--main-content">
                        <div className="second--main-details">
                            <input type="checkbox"/>
                            <p>112</p>
                            <p>Francisco Araujo</p>
                            <p>pan.x92@gmail.com</p>
                            <div>
                                <a href="#"><img src="./Images/icons/crear-nuevo-boton-de-lapiz.svg" alt="icon_edit" className="icon-details"/></a>
                                <a href="#"><img src="./Images/icons/borrar.svg" alt="icon_delete" className="icon-details"/></a>
                            </div>
                        </div>
                        <div className="second--main-details">
                            <input type="checkbox"/>
                            <p>10</p>
                            <p>Nancy Salazar</p>
                            <p>nancysalazar@platzi.com</p>
                            <div>
                                <a href="#"><img src="./Images/icons/crear-nuevo-boton-de-lapiz.svg" alt="icon_edit" className="icon-details"/></a>
                                <a href="#"><img src="./Images/icons/borrar.svg" alt="icon_delete" className="icon-details"/></a>
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
    </>
    )
}

export default AdminConsole
