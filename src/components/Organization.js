import React, { useState } from "react";
import Modal from "./Modal_Organization";
import CreateEvent from "../components/CreateEvent";
import logo_white from "../assets/static/logo-white.svg";
import ApiEventzi from "../utils/ApiEventzi";
import { PostFormat } from "../utils/FormatDate";
import Event from './OrganizationEvent'

import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdMoreHoriz,
} from 'react-icons/md'

const Organization = ({ id_organization, organization_name }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openEvents, setOpenEvents] = useState(false)

  const handleChange = () => {
    setOpenEvents(!openEvents)
  }
  const modalOpen = () => {
    setOpenModal(true);
  };

  const modalClose = () => {
    setOpenModal(false);
  };

  const test = () => {
    ApiEventzi.testEvent();
  };

  const handleSubmit = (form) => {
    ApiEventzi.newEvent(
      id_organization,
      form.name,
      form.type,
      form.status,
      form.description,
      PostFormat(form.date),
      form.url,
      form.template
    )
      .then((response) => {
        if (response.status) {
          setOpenModal(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setOpenModal(false);
      });
  };

  return (
    <>
      <div className='events_organization'>
      {openModal && (
          <Modal
            title="Create event"
            content={<CreateEvent submit={handleSubmit} />}
            modalClose={modalClose}
          />
        )}
        <div className='events_organization-header'>
          <figure className='events_container_logo'>
            <img src={logo_white} className='events_logo' />
          </figure>
          <h4 className='events_organization-title'>{organization_name}</h4>
          <button onClick={modalOpen} className="events_button">
            Create event
          </button>
          <button onClick={test} className="events_button">
            Test event
          </button>
        </div>
        <div>
          <button className='events_organization-button'>
            <MdMoreHoriz />
          </button>
          <button className='events_organization-button' onClick={handleChange}>
            {openEvents ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </button>
        </div>
      </div>
      {
        openEvents && <Event />
      }
      
    </>
  )
}

export default Organization