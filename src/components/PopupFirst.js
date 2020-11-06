import React from 'react'
// import Portal from './Portal'
import ReactDOM from 'react-dom'
import Portal2 from './Portal2'

const PopupFirst = ({closeModal}) => {
    return(
        <Portal2>
            <section className="overlay" id="overlay">
             <div className="popup--container-details" id="popup--container-details">
                 <h1>Add Organizations to event</h1>
                 <p>No trabajes solo, agrega organizadores al evento para que te den una mano</p>
                 <div className="popup--details-form">
                     <input id="input_text" className="popup--input" type="text" placeholder="Escribe un nombre" autoComplete="off"/>
                     <span className="popup--input-focus"></span>
                     <button className="button-popup">Add</button>
                 </div>
                 <div className="newOrganizator">
                     <span className="icon-user-plus"></span>
                     <a href="#" id="newOrganizator">Add Jairo Ramirez Castaño as Organizer</a>
                 </div>
          
                 <div className="container--details">
                     <img src="https://lh3.googleusercontent.com/ogw/ADGmqu_ksm6Ql15mCzcSRiahXsgeljHqXoPqOfDWWnlo=s32-c-mo" alt=""/>
                     <p>Jairo Ramirez Castaño</p>
                     <a href="#"><span className="icon-close-outline"></span></a>
                 </div>
                 <div className="section-close">
                     <div></div>
                     <button className="button--popup-close" onClick={closeModal}>Close</button>
                 </div>
             </div>
         </section>
        </Portal2>
    )


    // return ReactDOM.createPortal(
    //     <section className="overlay" id="overlay">
    //         <div className="popup--container-details" id="popup--container-details">
    //             <h1>Add Organizations to event</h1>
    //             <p>No trabajes solo, agrega organizadores al evento para que te den una mano</p>
    //             <div className="popup--details-form">
    //                 <input id="input_text" className="popup--input" type="text" placeholder="Escribe un nombre" autoComplete="off"/>
    //                 <span className="popup--input-focus"></span>
    //                 <button className="button-popup">Add</button>
    //             </div>

    //             <div className="newOrganizator">
    //                 <span className="icon-user-plus"></span>
    //                 <a href="#" id="newOrganizator">Add Jairo Ramirez Castaño as Organizer</a>
    //             </div>
                
    //             <div className="container--details">
    //                 <img src="https://lh3.googleusercontent.com/ogw/ADGmqu_ksm6Ql15mCzcSRiahXsgeljHqXoPqOfDWWnlo=s32-c-mo" alt=""/>
    //                 <p>Jairo Ramirez Castaño</p>
    //                 <a href="#"><span className="icon-close-outline"></span></a>
    //             </div>
    //             <div className="section-close">
    //                 <div></div>
    //                 <button className="button--popup-close" onClick={closeModal}>Close</button>
    //             </div>
    //         </div>
    //     </section>, document.getElementById('modal')
    // )
}

export default PopupFirst