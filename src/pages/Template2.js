import React from 'react'
import Speaker from '../components/Speaker'
import Talk from '../components/Talk'
import Asociate from '../components/Asociate'
import SuscribeForm from '../components/SuscribeForm'
import EventAbout from '../components/EventAbout'
import Countdown from 'react-countdown'
import FormatDate from '../utils/FormatDate'
import { MdPlace, MdEvent } from 'react-icons/md'

class Template2 extends React.Component {
  render () {
    this.props.talks.sort((a, b) =>
      a.time_ > b.time_ ? 1 : b.time_ > a.time_ ? -1 : 0
    )
    return (
      <div className="template2">
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
              <div className="countdown">
                <Countdown date={this.props.data.date_} />
              </div>
            </div>
            <div className="date__container">
              <h3 className="date__item" id="date">
                <MdEvent /> {FormatDate(this.props.data.date_)}
              </h3>
              <h3 className="date__item" id="url">
                <a href={this.props.data.url} target="blank">
                  <MdPlace /> {this.props.data.url}
                </a>
              </h3>
            </div>
            <SuscribeForm eventId={this.props.data.id_event_} />
          </div>
        </div>

        <main>
          <EventAbout
            name={this.props.data.event_name}
            image={this.props.data.banner}
            description={this.props.data.description_}
          />
          <h2 className="title">Schedule</h2>
          <section className="schedule" id="schedule">
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
          <h2 className="title">Asociates</h2>
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
      </div>
    )
  }
}
export default Template2
