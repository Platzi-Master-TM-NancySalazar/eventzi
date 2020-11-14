import React, { useState } from "react";


const EditGeneral = ({ submit }) => {
    const [form, setForm] = useState({});

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleClick = () => {
        submit(form);
    };
    return (
        <>
            <p>Aqui va la info</p>
        </>
    )
}

export default EditGeneral