import React from 'react'
import Speaker from '../components/Speaker'
import Talk from '../components/Talk'
import Asociate from '../components/Asociate'
import SuscribeForm from '../components/SuscribeForm'
import EventAbout from '../components/EventAbout'
import Countdown from 'react-countdown'
import FormatDate from '../utils/FormatDate'
import { MdPlace, MdEvent } from 'react-icons/md'

class Template1 extends React.Component {
  render () {
    this.props.talks.sort((a, b) =>
      a.time_ > b.time_ ? 1 : b.time_ > a.time_ ? -1 : 0
    )
    return (
      <div className="template1">
        <div className="cover">
          <div className="cover__content">
            <div className="cover__title">
              <img
                className="cover__logo"
                src={this.props.data.logo}
                alt="Event logo"
                height="100px"
                id="eventLogo"
              />
              <h1 id="eventName">{this.props.data.event_name}</h1>
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
                <Countdown date={this.props.data.date_} />
                <h3>Days / Hours / Minutes / Seconds</h3>
              </div>
            </div>
            <div className="date__container">
              <h3 className="date__item" id="date">
                <MdEvent /> {FormatDate(this.props.data.date_)}
              </h3>
              <h3 className="date__item" id="url">
                <MdPlace />
                <a href={`http://${this.props.data.url}`} target="blank"> {this.props.data.url}</a>
              </h3>
            </div>
          </div>
        </div>

        <main>
          <EventAbout
            name={this.props.data.event_name}
            image={this.props.data.banner}
            description={this.props.data.description_}
          />
          <section className="schedule" id="schedule">
            <h2 className="title">Schedule</h2>
            <div className="Schedule__grid">
              {this.props.talks.map((talk) => {
                return (
                  <div key={talk.title}>
                    <Talk
                      title={talk.title}
                      time={talk.time_}
                      speaker={talk.fullname}
                      description={talk.description_}
                    />
                  </div>
                )
              })}
            </div>
          </section>
          <h2 className="title">Speakers</h2>
          <section className="speakers">
            {this.props.speakers.map((speaker) => {
              return (
                <div key={speaker.id_speaker}>
                  <Speaker
                    name={speaker.fullname}
                    title={speaker.role_}
                    description={speaker.bio}
                    twitter={speaker.twitter}
                    image={speaker.picture}
                  />
                </div>
              )
            })}
          </section>
        </main>
        <section className="asociates">
          <h3 className="title">Asociates</h3>
          <div className="asociates__container">
            {this.props.partners.map((partner) => {
              return (
                <div key={partner.name_}>
                  <Asociate
                    name={partner.name_}
                    logo={partner.logo}
                    url={partner.url}
                  />
                </div>
              )
            })}
          </div>
        </section>
        <section className="register" id="register">
          <h2 className="title">Register with email</h2>
          <SuscribeForm />
        </section>
      </div>
    )
  }
}

export default Template1
