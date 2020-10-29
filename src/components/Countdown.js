import React from 'react'

const Countdown = () => {
  return (
  <div className="countdown">
    <div className="countdown__days">
      <h1 id="days">00</h1>
      <h3>Days</h3>
    </div>
    <div className="countdown__hours">
      <h1 id="hours">00</h1>
      <h3>Hours</h3>
    </div>
    <div className="countdown__minutes">
      <h1 id="minutes">00</h1>
      <h3>Minutes</h3>
    </div>
    <div className="countdown__seconds">
      <h1 id="seconds">00</h1>
      <h3>Seconds</h3>
    </div>
  </div>
  )
}

export default Countdown