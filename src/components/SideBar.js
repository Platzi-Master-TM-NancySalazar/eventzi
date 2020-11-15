import React, { useState } from 'react'
import {
  MdSettingsInputAntenna,
  MdInsertChart,
  MdDehaze,
  MdPeopleOutline,
  MdEventNote,
  MdEdit
} from 'react-icons/md'

const SideBar = ({ handleOption, select }) => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <section className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <a
          onClick={() => handleOption('Events')}
          className={`link ${select === 'Events' ? 'link-active' : ''}`}
        >
          <MdEventNote />
          Events
        </a>
        <a
          onClick={() => handleOption('Edit')}
          className={`link ${select === 'Edit' ? 'link-active' : ''}`}
        >
          <MdEdit />
          Edit
        </a>
        <a
          onClick={() => handleOption('Organizers')}
          className={`link ${select === 'Organizers' ? 'link-active' : ''}`}
        >
          <MdPeopleOutline />
          Organizers
        </a>
        <a
          onClick={() => handleOption('Diffusion')}
          className={`link ${select === 'Diffusion' ? 'link-active' : ''}`}
        >
          <MdSettingsInputAntenna />
          Diffusion
        </a>
        <a
          onClick={() => handleOption('Analitics')}
          className={`link ${select === 'Analitics' ? 'link-active' : ''}`}
        >
          <MdInsertChart />
          Analitics
        </a>
      </section>
      <div className="nav-menu__menuButon" onClick={showSidebar}>
        <MdDehaze />
      </div>
    </>
  )
}

export default SideBar
