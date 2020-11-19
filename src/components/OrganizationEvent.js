import React, { useEffect, useState, useContext } from "react";
import ApiEventzi from "../utils/ApiEventzi";
import FormatDate from "../utils/FormatDate";
import Tooltip from "../components/common/Tooltip";
import Portal from "./Portal";
import {
  MdClose,
  MdSupervisorAccount,
  MdRecordVoiceOver,
  MdDeleteForever,
  MdPlaylistAdd,
} from "react-icons/md";

import SpeakerModal from "../modals/SpeakerModal";
import GeneralModal from "../modals/GeneralModal";
import AssociateModal from "../modals/AssociateModal";
import globalContext from "../context/globalContext";

import { Link } from "react-router-dom";

const DeleteConfirm = ({ done, cancel, id }) => {
  return (
    <Portal>
      <div className="modal">
        <div className="modal__container">
          <div className="modal__container-header">
            <h2>Delete confirm</h2>
            <MdClose onClick={cancel} className="modal__container--close" />
          </div>
          <div>
            <p>are you sure you want to delete this event ?</p>
            <div className="events__save-area">
              <button className="button small" onClick={cancel}>
                Cancel
              </button>{" "}
              <button className="button small" onClick={() => done(id)}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

const ContainerEvent = ({
  event_name,
  date_,
  id_event_,
  clear,
  IsAdmin,
  status_,
  banner,
}) => {
  const [openSpeaker, setOpenSpeaker] = useState(false);
  const [openAssociate, setOpenAssociate] = useState(false);
  const [openGeneral, setOpenGeneral] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);
  const { sendAlert } = useContext(globalContext);

  const arrayTest = [
    "",
    {
      banner: "",
      created: "",
      date_: "",
      description_: "",
      event_name: "",
      event_type: "",
      id_event_: "",
      id_organization: "",
      logo: "",
      modified: "",
      status_: "",
      template: "",
      url: "",
    },
  ];

  const handlePublish = () => {
    1;
    if (banner !== null) {
      ApiEventzi.publishEvent(id_event_)
        .then((response) => {
          if (response.status === 200) {
            clear([]);
          }
        })
        .catch((err) => console.log(err));
    } else {
      sendAlert({
        show: true,
        type: "warning",
        message: "Missing banner",
      });
      // sendAlert({
      //   show: true,
      //   type: "error",
      //   message: "Add all info before publish",
      // });
    }
  };
  const handleNoPublish = () => {
    ApiEventzi.unPublishEvent(id_event_)
      .then((response) => {
        if (response.status === 200) {
          clear([]);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleCancel = () => {
    setOpenDelete(false);
  };
  const handleDelete = (id_event_) => {
    ApiEventzi.deleteEvent(id_event_)
      .then((response) => {
        if (response.status === 200) {
          clear([]);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSpeakers = (id_event_) => {
    setOpenSpeaker(true);
    ApiEventzi.getSpeakers(id_event_).then((response) => {
      const speakerInfo = response.data.data;
      setOpenSpeaker([true, speakerInfo]);
    });
  };

  const handleAssociates = (id_event_) => {
    setOpenAssociate(true);
  };

  const handleGeneral = (id_event_) => {
    setOpenGeneral(true);
    ApiEventzi.getGeneral(id_event_).then((response) => {
      if (response.data.data.length === 0) {
        setOpenGeneral([true, arrayTest]);
      } else {
        const generalInfo = response.data.data;
        setOpenGeneral([true, generalInfo]);
      }
    });
  };

  const speakerClose = () => {
    setOpenSpeaker(false);
  };

  const associateClose = () => {
    setOpenAssociate(false);
  };

  const generalClose = () => {
    setOpenGeneral(false);
  };

  const generalModalInfo = openGeneral[1];

  return (
    <div className="organization-event">
      <Link to={`events/${id_event_}`}>
        <div className="organization-event__figure">
          <div className="organization-event__detail">
            <h3 className="organization-event__text">{event_name}</h3>
            <p className="organization-event__text">{FormatDate(date_)}</p>
          </div>
        </div>
      </Link>

      {openDelete && (
        <DeleteConfirm
          done={handleDelete}
          cancel={handleCancel}
          id={id_event_}
        />
      )}

      {openSpeaker && (
        <SpeakerModal
          title="Speakers"
          speakerClose={speakerClose}
          id={id_event_}
        />
      )}

      {openAssociate && (
        <AssociateModal
          title="Associates"
          associateClose={associateClose}
          id={id_event_}
        />
      )}

      {openGeneral[0] === true && (
        <GeneralModal
          title="General information"
          generalClose={generalClose}
          id={id_event_}
          generalModalInfo={generalModalInfo}
        />
      )}

      <div className="organization-event__icon-container">
        {status_ === "Published" ? (
          <div
            onClick={() => handleNoPublish(id_event_)}
            className="organization-event__status--published"
          >
            Published
          </div>
        ) : (
          <div
            onClick={() => handlePublish(id_event_)}
            className="organization-event__status"
          >
            Publish
          </div>
        )}
        <Tooltip text="speakers">
          <MdRecordVoiceOver
            className="organization-event__icon speakers"
            onClick={() => handleSpeakers(id_event_)}
          />
        </Tooltip>
        <Tooltip text="associates">
          <MdSupervisorAccount
            className="organization-event__icon associates"
            onClick={() => handleAssociates(id_event_)}
          />
        </Tooltip>
        <Tooltip text="general info">
          <MdPlaylistAdd
            className="organization-event__icon general"
            onClick={() => handleGeneral(id_event_)}
          />
        </Tooltip>
        {IsAdmin && (
          <Tooltip text="delete">
            <MdDeleteForever
              className="organization-event__icon delete"
              onClick={() => setOpenDelete(true)}
            />
          </Tooltip>
        )}
      </div>
    </div>
  );
};

const Event = ({ id_organization }) => {
  const [events, setEvents] = useState([]);
  const [mensaje, setMensaje] = useState(false);

  useEffect(() => {
    if (!events.length) {
      ApiEventzi.getEventsByOrganization(id_organization)
        .then((response) => {
          if (response.data.data.length > 0) {
            setEvents(response.data.data);
          } else {
            setMensaje("there are no events associated with the organization");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [id_organization, events]);

  return (
    <>
      {mensaje && (
        <div className="organization-event">
          <p className="organization-event__message">{mensaje}</p>
        </div>
      )}
      {events.map((event) => {
        return (
          <ContainerEvent {...event} key={event.id_event_} clear={setEvents} />
        );
      })}
    </>
  );
};

export default Event;
