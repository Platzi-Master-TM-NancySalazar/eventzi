import React, { useState, useEffect } from "react";
import ApiEventzi from "../utils/ApiEventzi";


const EditAssociate = ({ submit, id }) => {
    // const [form, setForm] = useState({});

    // const handleChange = (event) => {
    //     setForm({
    //         ...form,
    //         [event.target.name]: event.target.value,
    //     });
    // };

    // const handleClick = () => {
    //     submit(form);
    // };
    const [associates, getAssociates] = useState([])
    console.log('Aqui llega el id', id)

    useEffect(() => {
        // ApiEventzi.get
    })


    return (
        <>
            <p>Aqui va la info</p>
        </>
    )
}

export default EditAssociate