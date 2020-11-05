import React from 'react'
import LeftContainer from '../components/LeftContainer'
import MenuAdmin from '../components/MenuAdmin'

const Admin = () => {
  return (
    <div className='admin_container'>
    //   <div className='admin_menu'>
    //     <ul className='admin_menu--item'>
    //       <li>Events</li>
    //     </ul>
    //     <ul className='admin_menu--item'>
    //       <li>Organizers</li>
    //     </ul>
    //     <ul className='admin_menu--item'>
    //       <li>Attenders</li>
    //     </ul>
    //     <ul className='admin_menu--item'>
    //       <li>Difusion</li>
    //     </ul>
    //     <ul className='admin_menu--item'>
    //       <li>Publish</li>
    //     </ul>
    //     <ul className='admin_menu--item'>
    //       <li>Analytics</li>
    //     </ul>
    //   </div>
      <MenuAdmin/>
      {/* <LeftContainer /> */}
      <div className='admin_content'>
      
      </div>
    </div>
  )
}

export default Admin
