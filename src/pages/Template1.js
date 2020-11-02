import React from "react";
import Speaker from "../components/Speaker";
import Talk from "../components/Talk";
import Asociate from "../components/Asociate";
import SuscribeForm from "../components/SuscribeForm";
import EventAbout from "../components/EventAbout";
import Countdown from "react-countdown";
import logo from "../assets/static/logo-white.svg";

const Template1 = (props) => {
  console.log("dentro de template" + props.name);
  return (
    <div className="template1">
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
            <h1 id="eventName">{props.name}</h1>
          </div>
          <div className="cover__info">
            <div className="cover-buttons">
              <a className="template1__btn" href="#schedule">
                Schedule
              </a>
              <a className="template1__btn" href="#register">
                Register
              </a>
            </div>
            <div className="countdown">
              <Countdown date={props.date_} />
              <h3>Days / Hours / Minutes / Seconds</h3>
            </div>
          </div>
          <div className="date__container">
            <h3 className="date__item" id="date">
              {props.date_}
            </h3>
            <h3 className="date__item" id="url">
              {props.url}
            </h3>
          </div>
        </div>
      </div>

      <main>
        <EventAbout
          name={props.name}
          image="https://www.revistaneo.com/sites/default/files/2019-06/Team%20Platzi-2.jpg"
          description={props.description_}
        />
        <section className="schedule" id="schedule">
          <h2 className="title">Schedule</h2>
          <div className="Schedule__grid">
            <Talk
              day="Day 1"
              time="12:12"
              name="presentation"
              description="event presentation for all students"
              speaker="Elon Musk"
            />
            <Talk
              day="Day 1"
              time="12:12"
              name="presentation"
              description="event presentation for all students"
              speaker="Elon Musk"
            />
          </div>
        </section>
        <h2 className="title">Speakers</h2>
        <section className="speakers">
          <Speaker
            description="Elon Reeve Musk is the founder, CEO, CTO and chief designer of SpaceX"
            name="Elon Musk"
            title="CEO of SpaceX"
            twitter="elonmusk"
            image="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg"
          />
        </section>
      </main>
      <section className="asociates">
        <h3 className="title">Asociates</h3>
        <div className="asociates__container">
          <Asociate
            logo="https://static.platzi.com/media/learningpath/badges/6475ba11-ef6a-401f-9144-d40f615e0cfc.jpg"
            name="Escuela de desarrollo"
          />
          <Asociate
            logo="https://static.platzi.com/media/learningpath/badges/484f81a2-17b7-4b03-b047-62ba129521b2.jpg"
            name="Escuela de Javascript"
          />
        </div>
      </section>
      <section className="register" id="register">
        <h2 className="title">Register with email</h2>
        <SuscribeForm />
      </section>
    </div>
  );
};

export default Template1;
