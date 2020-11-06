import React from 'react'
import Lecturer from './Lecturer'
import Agenda from './Agenda'
import General from './General'
import Associates from './Associates'

export default function Edit() {
    return (
        <div className="configuration">
            <div className="configurarion__general">
                <General />
            </div>

            <div className="configurarion__lecturer">
                <Lecturer />
            </div>

            <div className="configurarion__agenda">
                <Agenda />
            </div>

            <div className="configurarion__associates">
                <Associates />
            </div>
        </div>
    )
}

