import React from "react";
import Template1 from "./Template1";
import Template2 from "./Template2";
import axios from "axios";

const Event = () => {
  const id = "51";

  axios
    .get(`https://eventziapi.herokuapp.com/events/${id}`)
    .then((response) => {
      let event = response.data.data[0];
      console.log(event.event_name, event.url, event.date_, event.description_);
    })
    .catch((err) => console.log(err));

  return <Template1 />;
};

export default Event;
