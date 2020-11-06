import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/static/hero_platziConf.png";
import EventCard from "../components/EventCard";
import Error from "../pages/Error";
import Loader from "../components/Loader";
import FormatDate from "../utils/FormatDate";

class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        "https://eventziapi.herokuapp.com/events/upcoming"
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return <Loader />;
    }

    if (this.state.error) {
      console.log(this.state.error.message);
      return <Error />;
    }
    this.state.data.data.sort((a, b) =>
      a.date_ > b.date_ ? 1 : b.date_ > a.date_ ? -1 : 0
    );
    return (
      <>
        <div className="hero">
          <div className="hero--element"></div>
          <img className="hero--img" src={hero} alt="Imagen platziConf" />
        </div>
        <div className="home_container">
          <h3 className="home_container--title">Upcoming</h3>
          <div className="home_container--cards">
            {this.state.data.data.map((card) => {
              return (
                <Link to={`events/${card.id_event_}`}>
                  <EventCard
                    title={card.event_name}
                    date={FormatDate(card.date_)}
                    organizer={card.event_type}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default Home;
