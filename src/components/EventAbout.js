import React from 'react'

class EventAbout extends React.Component {
  render () {
    return (
      <section className="about">
        <h2 className="title">{this.props.name}</h2>
        <div className="about__info">
          <img src={this.props.image} alt="Event image" id="aboutImage" />
          <p id="aboutDescription">{this.props.description}</p>
        </div>
      </section>
    )
  }
}
export default EventAbout
