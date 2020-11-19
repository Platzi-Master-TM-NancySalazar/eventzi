import React, {useState} from 'react'
import ApiEventzi from '../utils/ApiEventzi'
import Select from './Select'

const PopupFirst = ({evenChange}) => {

    // console.log(`popupfirst ${badges}`)

    const [badgePop, setBadgePopup] = useState([])

    React.useEffect(()=> {
        ApiEventzi.getEvents(25)
        .then(response => {
            let newInfo = response.data.data
            console.log(`badgePop ${response}`)
            setBadgePopup(newInfo)
        })
        .catch((error) => console.log(error))
    }, [])

    const handleClick = () => {
        ApiEventzi.sendOrganizers(id_user)
    }

    const [change, setChange] = useState({disabled:true})

    const handleChange = (event) => {
        event.target.value ? setChange({disabled:false}) : setChange({disabled:true})
    }
    return (
            <section className="overlay" id="overlay">
             <div className="popup--container-details" id="popup--container-details">
                 <h2>Add organizers to the event</h2>
                 <p>No trabajes solo, agrega organizadores al evento para que te den una mano</p>
                 <div className="popup--details-form">
                     <input onChange={handleChange} name="input_text" className="popup--input" type="text" placeholder="Write a name" autoComplete="off"/>
                     <span className="popup--input-focus"></span>
                     <select className='popup--details-select'>
                        <option>Select event</option>
                        <Select badges={badgePop}/>
                    </select>
                     
                    
                     <button onClick={handleClick} className="button-popup">Add</button>
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