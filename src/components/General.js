import React, { useState } from 'react'
import axios from "axios"

export default function General() {
    const [form, setForm] = useState(null)

    const handleInput = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        sendGeneral(form)
    }

    // const sendGeneral = ({ general__banner, general__date, general__description, general__logo, general__name, general__template, general__url }) => {
    const sendGeneral = (form) => {
        console.log(form)
        // axios({
        //     method: 'POST',
        //     url: 'https://eventziapi.herokuapp.com/events/organizations/2',
        //     data: {
        //         event_name: general__name,
        //         event_type: 1,
        //         status_: 1,
        //         event_description: general__description,
        //         date: general__date,
        //         url: general__url,
        //         template: general__template,
        //         baner: general__banner,
        //         logo: general__logo
        //     }
        // })
        //     .then(data => console.log(data))
        //     .catch((err) => console.log(err))
    }

    return (
        <div className="general">

            <div className="general__container">
                <h3>General</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="general__logo">
                        <p>Logo</p>
                        <input type="file" name="general__logo" id="general__logo" placeholder="" onChange={handleInput} />
                    </label>

                    <label htmlFor="general__banner">
                        <p>Banner</p>
                        <input type="file" name="general__banner" id="general__banner" placeholder="" onChange={handleInput} />
                    </label>


                    <label htmlFor="general__name">
                        <p>Event name</p>
                        <input type="text" name="general__name" id="general__name" placeholder="Nombre..." onChange={handleInput} />
                    </label>

                    <label htmlFor="general__url">
                        <p>Event url</p>
                        <input type="text" name="general__url" id="general__url" placeholder="Url" onChange={handleInput} />
                    </label>

                    <label htmlFor="general__date">
                        <p>Event date</p>
                        <input type="date" name="general__date" id="general__date" placeholder="Date" onChange={handleInput} />
                    </label>

                    <label htmlFor="general__description">
                        <p>Event description</p>
                        <textarea type="text" name="general__description" id="general__description" placeholder="Description..." onChange={handleInput}></textarea>
                    </label>

                    <label htmlFor="general__template">
                        <p>Template:</p>
                        <select type="text" name="general__template" id="general__template" placeholder="Template" onChange={handleInput}>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </label>

                    <button type="submit">Save event</button>

                </form>
            </div>
        </div>
    )
}
