import React from 'react'
import { MdAccountBalance } from 'react-icons/md'
import { MdPermIdentity } from 'react-icons/md'
import { MdSupervisorAccount } from 'react-icons/md'
import { MdSettingsInputAntenna } from 'react-icons/md'
import { MdContentCopy } from 'react-icons/md'
import { MdInsertChart } from 'react-icons/md'

const SideBar = ({ handleOption, select }) => {
  return (
    <section className='sideBar'>
      <a onClick={() => handleOption('Events')} className='link'>
        <MdPermIdentity />
        <span className='icon-user'>Events</span>
      </a>
      <a onClick={() => handleOption('Edit')} className='link'>
        <MdPermIdentity />
        <span className='icon-user'>Edit</span>
      </a>
      <a onClick={() => handleOption('Organizers')} className='link'>
        <MdPermIdentity />
        <span className='icon-user'>Organizers</span>
      </a>
      <a onClick={() => handleOption('Attenders')} className='link'>
        <MdSupervisorAccount />
        <span className='icon-users'>Attenders</span>
      </a>
      <a onClick={() => handleOption('Diffusion')} className='link'>
        <MdSettingsInputAntenna />
        <span className='icon-rss'>Diffusion</span>
      </a>
      <a onClick={() => handleOption('Publish')} className='link'>
        <MdContentCopy />
        <span className='icon-copy'>Publish</span>
      </a>
      <a onClick={() => handleOption('Analitics')} className='link'>
        <MdInsertChart />
        <span className='icon-stats-bars'>Analitics</span>
      </a>
    </section>
  )
}

export default SideBar
