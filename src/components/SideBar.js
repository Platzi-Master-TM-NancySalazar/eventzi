import React from 'react'
import { MdAccountBalance } from "react-icons/md";
import {MdPermIdentity} from 'react-icons/md'
import {MdSupervisorAccount} from 'react-icons/md'
import {MdSettingsInputAntenna} from 'react-icons/md'
import {MdContentCopy} from 'react-icons/md'
import {MdInsertChart} from 'react-icons/md'

const SideBar = ()=>{
    return(
        <section className='sideBar'>
            <a href="#" className="link"><MdAccountBalance/><span >Organizations</span></a>
            <a href="#" className="link"><MdPermIdentity/><span className="icon-user">Organizers</span></a>
            <a href="#" className="link"><MdSupervisorAccount/><span className="icon-users">Attenders</span></a>
            <a href="#" className="link"><MdSettingsInputAntenna/><span className="icon-rss">Diffusion</span></a>
            <a href="#" className="link"><MdContentCopy/><span className="icon-copy">Publish</span></a>
            <a href="#" className="link"><MdInsertChart/><span className="icon-stats-bars">Analitics</span></a>
        </section>
    )
}

export default SideBar