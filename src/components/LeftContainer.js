import React from 'react'
import { Link } from 'react-router-dom'
import { MdNotifications, MdPerson, MdPeople, MdEqualizer, MdPublish, MdShare } from "react-icons/md"


export default function LeftContainer() {
    return (
        <div className="left-container">
            <ul>
                <li><MdNotifications /> Events</li>

                <li><MdPerson />  Organizers</li>

                <li><MdPeople /> Attendants</li>

                <Link to="/eventPanel">
                    <li><MdShare /> Diffusion</li>
                </Link>

                <li><MdPublish />  Publish</li>

                <Link to="/analyticsPanel">
                    <li><MdEqualizer /> Analytics</li>
                </Link>
            </ul>
        </div>
    )
}
