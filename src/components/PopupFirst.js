import React from 'react'
import '../assets/styles/popup-first.css'

const popupFirst = () => {
    return(
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
    </section>
    )
}

export default popupFirst