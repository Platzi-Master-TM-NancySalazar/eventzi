import React from 'react'

import event_image from '../assets/static/event_image.png'

const EventCard = (props) => {
  return (
    <div className="event_card">
      <img className="event_card--img" src={event_image} />

      <div className="event_card--description">
        <h3 className="event_card--title">{props.title}</h3>
        <p className="event_card--text">{props.date}</p>
        <p className="event_card--text">{props.organizer}</p>
      </div>
    </div>
  )
}

export default EventCard
