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
          <MdEventNote className='link__icon'/>
          Events
        </a>
        <a
          onClick={() => handleOption('Edit')}
          className={`link ${select === 'Edit' ? 'link-active' : ''}`}
        >
          <MdEdit className='link__icon'/>
          Edit
        </a>
        <a
          onClick={() => handleOption('Organizers')}
          className={`link ${select === 'Organizers' ? 'link-active' : ''}`}
        >
          <MdPeopleOutline className='link__icon'/>
          Organizers
        </a>
        <a
          onClick={() => handleOption('Diffusion')}
          className={`link ${select === 'Diffusion' ? 'link-active' : ''}`}
        >
          <MdSettingsInputAntenna className='link__icon'/>
          Diffusion
        </a>
        <a
          onClick={() => handleOption('Analitics')}
          className={`link ${select === 'Analitics' ? 'link-active' : ''}`}
        >
          <MdInsertChart className='link__icon'/>
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
