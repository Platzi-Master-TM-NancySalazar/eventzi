import React, { useState } from 'react'
import ApiEventzi from '../utils/ApiEventzi'
import Select from './Select'

const PopupFirst = ({ evenChange }) => {

  const [badgePop, setBadgePopup] = useState([])

    React.useEffect(()=> {
        ApiEventzi.getEvents()
        .then(response => {
            let newInfo = response.data.data
            setBadgePopup(newInfo)
        })
        .catch((error) => console.log(error))
    }, [])

  const handleClick = (event) => {
      event.preventDefault()
    ApiEventzi.sendOrganizers(id_user)
  }

  const [change, setChange] = useState( false )

  const handleChange = (event) => {
    event.preventdefault()
    !!event.target.value ? setChange( true ) : setChange( false )
    console.log(!!event.target.value)
  }
  return (
            <section className="overlay" id="overlay">
             <div className="popup--container-details" id="popup--container-details">
                 <h2>Add organizers to the event</h2>
                 <p>No trabajes solo, agrega organizadores al evento para que te den una mano</p>
                 <div className="popup--details-form">
                     <input onChange={handleChange} name="input_text" className="popup--input" type="text" placeholder="Write a name" autoComplete="off"/>
                     <span className="popup--input-focus"></span>
                        <Select badges={badgePop}/>

                     <button onClick={handleClick} disabled={change} className="button-popup">Add</button>
                 </div>
                 <div className="container--details">
                     <a href="#"><span className="icon-close-outline"></span></a>
                 </div>
                 <div className="section-close">
                     <div></div>
                     <button className="button--popup-close" onClick={evenChange}>Close</button>
                 </div>
             </div>
         </section>
  )
}

export default PopupFirst
