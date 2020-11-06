import React from 'react'
import { MdAccountBalance } from 'react-icons/md'
import { MdPermIdentity } from 'react-icons/md'
import { MdSupervisorAccount } from 'react-icons/md'
import { MdSettingsInputAntenna } from 'react-icons/md'
import { MdContentCopy } from 'react-icons/md'
import { MdInsertChart } from 'react-icons/md'
import { HiPencil } from "react-icons/hi";

const SideBar = ({ handleOption, select }) => {
  return (
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

export default SideBar
