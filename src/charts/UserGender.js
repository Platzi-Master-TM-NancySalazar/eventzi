import React, { useEffect } from 'react';
import c3 from 'c3';
import axios from "axios";

function data(endpoint) {
    axios({
        method: 'GET',
        url: endpoint
    }).then(res => {
        return (res.data)
    }).catch(err =>
        alert(err))
}

let gender = data('https://eventziapi.herokuapp.com/dashboard/MaleFemale/total')

const UserGender = () => {
    useEffect(() => {
        c3.generate({
            bindto: '#user_gender',
            // size: {
            //   height: 400,
            //   width: 600
            // },
            data: {
                // iris data from R
                columns: [
                    [
                        'Female',
                        50
                    ],
                    [
                        'Male',
                        50
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

    return <div id='user_gender' />
}

export default UserGender