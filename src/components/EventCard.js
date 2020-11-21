import React from 'react'

import event_image_1 from '../assets/static/event_image.png'
import event_image_2 from '../assets/static/event-image_1.png'
import event_image_3 from '../assets/static/event-image_2.png'
import event_image_4 from '../assets/static/event-image_3.png'
import event_image_5 from '../assets/static/event-image_4.png'
import event_image_6 from '../assets/static/event-image_5.png'
import event_image_7 from '../assets/static/event-image_6.png'

const EventCard = (props) => {
  const item = Math.floor(Math.random() * 7)

  const handleSelectImagen = (item) => {
    switch (item) {
      case 1:
        return event_image_1

      case 2:
        return event_image_2

      case 3:
        return event_image_3

      case 4:
        return event_image_4

      case 5:
        return event_image_5

      case 6:
        return event_image_6

      default:
        return event_image_7
    }
  }

  return (
    <div className="event_card">
      <img className="event_card--img" src={handleSelectImagen(item)} />

      <div className="event_card--description">
        <h3 className="event_card--title">{props.title}</h3>
        <p className="event_card--text">{props.date}</p>
        <p className="event_card--text">{props.organizer}</p>
      </div>
    </div>
  )
}

export default EventCard
