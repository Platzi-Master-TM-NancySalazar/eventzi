import React, { useState } from "react";
import Input, { InputDate } from "./input";
import temp1 from "../assets/static/temp1.png";
import temp2 from "../assets/static/temp2.png";
import upload from '../assets/static/upload.png'

const CreateEvent = ({ submit }) => {
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    submit(form);
  };

  return (
    <div>
      <form className="events__form">
        <div>
          <Input text="name" event={handleChange} />
          <Input text="type" event={handleChange} />
          <Input text="status" event={handleChange} />
          <Input text="description" event={handleChange} />
          <Input text="url" event={handleChange} />
          <p className="marginbtm">Date / Time</p>
          <InputDate text="date" event={handleChange} />         
          <p>Select Template:</p>
          <input
            type="radio"
            name="template"
            value="Template 1"
            text="template"
            required
            onChange={handleChange}
          />
          <img src={temp1} alt="Template 1" className="img-template" />
          <input
            type="radio"
            name="template"
            value="Template 2"
            text="template"
            onChange={handleChange}
          />
          <img src={temp2} alt="Template 2" className="img-template" />
        </div>
        <div>
          <label>
            <img className="events__upload" src={upload} alt="Load logo" />
            <input
              type="file"
              className="events__upload-input"
              text="logo"
            />
          </label>
          <label>
            <img className="events__upload" src={upload} alt="Load banner" />
            <input
              type="file"
              className="events__upload-input"
              text="banner"
            />
          </label>
        </div>
      </form>
      <div className="events__save-area">
        <button onClick={handleClick} className="events_button">
          Create event
        </button>
      </div>
    </div>
  );
};
export default CreateEvent;
