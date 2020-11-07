import React, { useEffect, useState } from 'react';
import c3 from 'c3';
import Loader from '../components/Loader';

const EventType = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const generateChart = () => {
        c3.generate({
            bindto: '#event_type',
            data: {
                columns: [
                    ['Online', data[0]],
                    ['Presential', data[1]],
                ],
                type: 'pie',
            },
        })
    }

    useEffect(() => {
        if (!data.length) {
            fetch('https://eventziapi.herokuapp.com/dashboard/events/type')
                .then((response) => response.json())
                .then((data) => {
                    setData(data)
                    setLoading(false)
                })
        }
    }, [data])

    return (
        <>
            <div id='event_type' />
            {loading ? <Loader /> : generateChart()}
        </>
    )
}

export default EventType
