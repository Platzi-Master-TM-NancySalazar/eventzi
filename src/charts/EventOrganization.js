import React, { useEffect } from 'react'
import c3 from 'c3'

const UserCountry = () => {
    useEffect(() => {
        c3.generate({
            bindto: '#user_country',
            // size: {
            //   height: 400,
            //   width: 400
            // },
            data: {
                columns: [
                    ['Organization', 39, 37, 38, 43, 35, 45, 46, 30, 44, 48],
                ],
                type: 'bar',
            },
            bar: {
                width: {
                    ratio: 0.5, // this makes bar width 50% of length between ticks
                },
                // or
                //width: 100 // this makes bar width 100px
            },
            grid: {
                focus: {
                    show: true,
                },
                x: {
                    show: false,
                },
                y: {
                    show: true,
                },
            },
        })
    }, [])

    return <div id='user_country' className='analitics_chart' />
}

export default UserCountry
