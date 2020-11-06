import React from 'react'

import 'c3/c3.css';

import BarChart from '../charts/BarChart'
import SplineChart from '../charts/SplineChart'
import PieChart from '../charts/PieChart'

const Analitics = () => {
  return (
    <div className='analitics'>
      <h3 className='analitics_title'>Detailed statistics of your event</h3>
      <div className='analitics_display'>
        <BarChart />
        <SplineChart />
        <PieChart />
      </div>
    </div>
  )
}

export default Analitics
