import React from "react";
import Speaker from "../components/Speaker";
import Talk from "../components/Talk";
import Asociate from "../components/Asociate";
import SuscribeForm from "../components/SuscribeForm";
import EventAbout from "../components/EventAbout";
import Countdown from "../components/Countdown";
import logo from "../assets/static/logo-white.svg";

import "../assets/styles/pages/_template1.scss";

class Event extends React.Component {
  render() {
    return (
      <>
        <div className="cover">
          <div className="cover__content">
            <div className="cover__title">
              <img
                className="cover__logo"
                src={logo}
                alt="Event logo"
                height="100px"
                id="eventLogo"
              />
              <h1 id="eventName">Name</h1>
            </div>
            <div className="cover__info">
              <div className="cover-buttons">
                <button className="template1__btn">Schedule</button>
                <button className="template1__btn">Register</button>
              </div>
              <Countdown />
            </div>
            <div className="date__container">
              <h3 className="date__item" id="date">
                fecha
              </h3>
              <h3 className="date__item" id="place">
                url
              </h3>
            </div>
          </div>
        </div>

        <main>
          <EventAbout />
          <section className="schedule">
            <h2 className="title">Schedule</h2>
            <div className="Schedule__grid">
              <Talk />
            </div>
          </section>
          <h2 className="title">Speakers</h2>
          <section className="speakers">
            <Speaker />
          </section>
        </main>
        <section className="asociates">
          <h3 className="title">Asociates</h3>
          <div className="asociates__container">
            <Asociate />
          </div>
        </section>
        <SuscribeForm />
      </>
    );
  }
}

export default Event;
