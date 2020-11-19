import React, { useState } from 'react'
import SideBar from '../components/SideBar'

import Events from '../components/Events'
import Edit from '../components/Edit'
import Organizers from '../components/Organizers'
import Diffusion from '../components/Diffusion'
import Analitics from '../components/Analitics'
import CreateEvent from '../components/events/CreateEvent'

const AdminPanel = () => {
  const [option, setOption] = useState('Events')

  const handleOption = (selectOption) => {
    setOption(selectOption)
  }

  const handleRender = () => {
    switch (option) {
      case 'Events':
        return <Events />

      case 'Edit':
        return <Edit />

      case 'Organizers':
        return <Organizers />

      case 'Diffusion':
        return <Diffusion />

      case 'Analitics':
        return <Analitics />

      default:
        return <Events />
    }
  }

  return (
    <main className="main--container">
      <SideBar handleOption={handleOption} select={option} />
      <section className="main--container-list">
        {handleRender()}
        <CreateEvent />
      </section>
    </main>
  )
}

export default AdminPanel
