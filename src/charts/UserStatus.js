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

const UserStatus = () => {
    useEffect(() => {
        c3.generate({
            bindto: '#user_status',
            // size: {
            //   height: 400,
            //   width: 600
            // },
            data: {
                // iris data from R
                columns: [
                    [
                        'Active',
                        70
                    ],
                    [
                        'Inactive',
                        30
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

    return <div id='user_status' />
}

export default UserStatus
