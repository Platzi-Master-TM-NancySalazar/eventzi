import React, { useEffect } from 'react';
import c3 from 'c3';
import axios from "axios";

let data = () => {
    axios({
        method: 'GET',
        url: 'https://eventziapi.herokuapp.com/dashboard/MaleFemale/total'
    }).then(res => {
        return (res)
    }).catch(err => console.log(err))
}

const EventStatus = () => {
    useEffect(() => {
        c3.generate({
            bindto: '#event_status',
            // size: {
            //   height: 400,
            //   width: 600
            // },
            data: {
                // iris data from R
                columns: [
                    [
                        'Created',
                        30
                    ],
                    [
                        'Done',
                        30
                    ],
                    [
                        'Published',
                        40
                    ],
                ],
                type: 'pie',
                onclick: function (d, i) {
                    console.log('onclick', d, i)
                },
                onmouseover: function (d, i) {
                    console.log('onmouseover', d, i)
                },
                onmouseout: function (d, i) {
                    console.log('onmouseout', d, i)
                },
            },
        })
    }, [])

    return <div id='event_status' />
}

export default EventStatus