import React from 'react'

const Talk = (props) => {
  return (
    <div className="talk">
      <div className="talk__day">
        <p>{props.day}</p>
      </div>
      <div className="talk__time">
        <p>{props.time}</p>
      </div>
      <div className="talk__name">
        <p className="talk__name--strong">{props.title}</p>
        <p>{props.speaker}</p>
      </div>
      <div className="talk__description">
        <p>{props.description}</p>
      </div>
    </div>
  )
}
export default Talk
