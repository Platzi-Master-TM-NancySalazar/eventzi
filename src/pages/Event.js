import React from "react";
import Template1 from "./Template1";
import Template2 from "./Template2";
import Loader from "../components/Loader";
import Error from "./Error";
import NotFound from "./NotFound";

class Event extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    speakers: undefined,
    talks: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    const API = "https://eventziapi.herokuapp.com/";
    let eventId = "51";
    try {
      const response = await fetch(`${API}events/${eventId}`);
      const response2 = await fetch(`${API}events/${eventId}/speakers`);
      const response3 = await fetch(`${API}events/${eventId}/schedule`);
      const response4 = await fetch(`${API}partners/events/${eventId}`);

      const data = await response.json();
      const speakers = await response2.json();
      const talks = await response3.json();
      const partners = await response4.json();

      this.setState({
        loading: false,
        data: data,
        speakers: speakers,
        talks: talks,
        partners: partners,
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
      return <Error />;
    }

    if (this.state.data.data[0] == undefined) {
      return <NotFound />;
    }
    return (
      <Template1
        data={this.state.data.data[0]}
        speakers={this.state.speakers.data}
        talks={this.state.talks.data}
        partners={this.state.partners.data}
      />
    );
  }
}
export default Event;
