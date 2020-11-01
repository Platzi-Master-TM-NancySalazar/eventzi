import React, { useState, useEffect } from "react";
import Template1 from "./Template1";
import Template2 from "./Template2";

const eventId = "49";

const Event = () => {
  const [event, setEvent] = useState();

  useEffect(() => {
    fetch(`http://www.eventziapp.com:3000/events/${eventId}`)
      .then((response) => response.json())
      .then((data) => setEvent(data));
  }, []);
  console.log(event);

  return <Template1 />;
};
export default Event;
