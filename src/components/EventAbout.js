import React from 'react'
import image from '../assets/static/master.jpg'

const EventAbout = () => {
  return (
    <section className="about">
      <h2 className="title">Event title</h2>
      <div className="about__info">
        <img src={image} alt="Event image" id="aboutImage"/>
        <p id="aboutDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui magni ducimus excepturi esse, quo eos a ipsum laudantium amet rerum ullam enim debitis nulla in impedit. Minus fuga distinctio eius!</p>
      </div>
      </section>
  )
}

export default EventAbout