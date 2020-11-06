<<<<<<< HEAD
import React from 'react'
import { MdAccountBalance } from 'react-icons/md'
import { MdPermIdentity } from 'react-icons/md'
import { MdSupervisorAccount } from 'react-icons/md'
import { MdSettingsInputAntenna } from 'react-icons/md'
import { MdContentCopy } from 'react-icons/md'
import { MdInsertChart } from 'react-icons/md'
import { HiPencil } from "react-icons/hi";
=======
import React from "react";
import { MdAccountBalance } from "react-icons/md";
import { MdPermIdentity } from "react-icons/md";
import { MdSupervisorAccount } from "react-icons/md";
import { MdSettingsInputAntenna } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { MdInsertChart, MdDehaze } from "react-icons/md";
import { useState } from "react";
>>>>>>> b8f886d275e4c86586229b65ce79f93e5368cefb

const SideBar = ({ handleOption, select }) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
<<<<<<< HEAD
    <section className='sideBar'>
      <a onClick={() => handleOption('Events')} className={`link ${select == 'Events' ? 'link-active': ''}`}><MdAccountBalance />Events</a>
      <a onClick={() => handleOption('Edit')} className={`link ${select == 'Edit' ? 'link-active': ''}`}><HiPencil />Edit</a>
      <a onClick={() => handleOption('Organizers')} className={`link ${select == 'Organizers' ? 'link-active': ''}`}><MdPermIdentity />Organizers</a>
      <a onClick={() => handleOption('Attenders')} className={`link ${select == 'Attenders' ? 'link-active': ''}`}><MdSupervisorAccount />Attenders</a>
      <a onClick={() => handleOption('Diffusion')} className={`link ${select == 'Diffusion' ? 'link-active': ''}`}><MdSettingsInputAntenna />Diffusion</a>
      <a onClick={() => handleOption('Publish')} className={`link ${select == 'Publish' ? 'link-active': ''}`}><MdContentCopy />Publish</a>
      <a onClick={() => handleOption('Analitics')} className={`link ${select == 'Analitics' ? 'link-active': ''}`}><MdInsertChart />Analitics</a>
    </section>
  )
}
=======
    <>
      <section className={sidebar ? "nav-menu active" : "nav-menu"}>
        <a
          onClick={() => handleOption("Events")}
          className={`link ${select == "Events" ? "link-active" : ""}`}
        >
          <MdPermIdentity />
          Events
        </a>
        <a
          onClick={() => handleOption("Edit")}
          className={`link ${select == "Edit" ? "link-active" : ""}`}
        >
          <MdPermIdentity />
          Edit
        </a>
        <a
          onClick={() => handleOption("Organizers")}
          className={`link ${select == "Organizers" ? "link-active" : ""}`}
        >
          <MdPermIdentity />
          Organizers
        </a>
        <a
          onClick={() => handleOption("Attenders")}
          className={`link ${select == "Attenders" ? "link-active" : ""}`}
        >
          <MdSupervisorAccount />
          Attenders
        </a>
        <a
          onClick={() => handleOption("Diffusion")}
          className={`link ${select == "Diffusion" ? "link-active" : ""}`}
        >
          <MdSettingsInputAntenna />
          Diffusion
        </a>
        <a
          onClick={() => handleOption("Publish")}
          className={`link ${select == "Publish" ? "link-active" : ""}`}
        >
          <MdContentCopy />
          Publish
        </a>
        <a
          onClick={() => handleOption("Analitics")}
          className={`link ${select == "Analitics" ? "link-active" : ""}`}
        >
          <MdInsertChart />
          Analitics
        </a>
      </section>
      <div className="nav-menu__menuButon" onClick={showSidebar}>
        <MdDehaze />
      </div>
    </>
  );
};
>>>>>>> b8f886d275e4c86586229b65ce79f93e5368cefb

export default SideBar;
