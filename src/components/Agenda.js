import React, { useState } from 'react'
import axios from "axios"

export default function Agenda() {
    const config = {
        bucketName: 'myBucket',
        dirName: 'photos', /* optional */
        region: 'eu-west-1',
        accessKeyId: 'ANEIFNENI4324N2NIEXAMPLE',
        secretAccessKey: 'cms21uMxçduyUxYjeg20+DEkgDxe6veFosBT7eUgEXAMPLE',
    }

    const [form, setForm] = useState(null)

    const handleInput = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        sendagenda(form)
    }

    const sendagenda = ({ agenda__date, agenda__description, agenda__title }) => {
        console.log(form)
        axios({
            method: 'POST',
            url: 'https://eventziapi.herokuapp.com/events/1/speaker/1/schedule',
            data: {
                title: agenda__title,
                description_: agenda__description,
                time_: `${agenda__date}:00`
            }
        })
            .then(data => console.log(data))
            .catch((err) => console.log(err))
    }

    return (
        <div className="agenda">

            <div className="agenda__container">
                <h3>Schedule</h3>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="agenda__name">
                        <p>Title</p>
                        <input type="text" name="agenda__title" id="agenda__title" placeholder="Title..." onChange={handleInput} />
                    </label>

                    <label htmlFor="agenda__description">
                        <p>Description</p>
                        <textarea type="text" name="agenda__description" id="agenda__description" placeholder="Tell us about the agenda..." onChange={handleInput} ></textarea>
                    </label>

                    {/* <label htmlFor="agenda__relation">
                        <p>Relation with lecturer</p>
                        <input type="text" name="agenda__relation" id="agenda__relation" placeholder="Relation with lecturer" onChange={handleInput} />
                    </label> */}

                    <label htmlFor="agenda__date">
                        <p>Time</p>
                        <input type="time" name="agenda__date" id="agenda__date" placeholder="Date" onChange={handleInput} />
                    </label>

                    <button type="submit">Save talk</button>

                </form>

            </div>
        </div>

    )
}