import React from 'react'

const SideBar = ()=>{
    return(
        <section className='sideBar'>
            <a href="#" className="link"><span className="icon-bell">Organizations</span></a>
            <a href="#" className="link"><span className="icon-user">Organizers</span></a>
            <a href="#" className="link"><span className="icon-users">Attenders</span></a>
            <a href="#" className="link"><span className="icon-rss">Diffusion</span></a>
            <a href="#" className="link"><span className="icon-copy">Publish</span></a>
            <a href="#" className="link"><span className="icon-stats-bars">Analitics</span></a>
        </section>
    )
}

export default SideBar