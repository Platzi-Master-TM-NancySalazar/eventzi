import React from 'react'
import { HiOutlineTrash } from "react-icons/hi";
import { HiPencil } from "react-icons/hi";

const AddOrganizator = ({badges}) =>{
console.log(badges)
//     const [badge, setBadge] = useState([{
//         'id':'123',
//         'name':'Francisco Araujo',
//         'email':'pan.x92@gmail.com',
//         'event':'Event 2020'
//     },
//     {
//         'id':'234',
//         'name':'Nancy Salazar',
//         'email':'nancysalazar@platzi.com',
//         'event':'Event 2021'
//     },
//     {
//         'id':'387',
//         'name':'Jairo Ramirez',
//         'email':'trolljairo@gmail.com',
//         'event':'Algun dia'
//     }
// ])
    return(
        <>
            {badges.map((data) => {
                return(
                    <div className='second__main-details' key={data.id}>
                        <div className='check'>
                            <input type='checkbox'/>
                            <p>{data.id}</p>
                        </div>
                        <p className='content-name'>{data.name}</p>
                        <p className='content-email'>{data.email}</p>
                        <p className='content-event'>{data.event}</p>
                        <div>
                            <a href='#'><HiPencil className='icon-details-pencil'/></a>
                            <a href='#'><HiOutlineTrash className='icon-details'/></a>
                        </div>
                    </div>
                )
            })}

            {/* <div className='second__main-details'>
                <div className='check'>
                    <input type='checkbox' />
                    <p>{Badge.id}</p>
                </div>
                <p className='content-name'>{Badge.name}</p>
                <p className='content-email'>{Badge.email}</p>
                <p className='content-event'>{Badge.event}</p>
                <div>
                    <a href='#'>
                    <HiPencil className='icon-details-pencil'/>
                    </a>
                    <a href='#'>
                    <HiOutlineTrash className='icon-details'/>
                    </a>
                </div>
            </div> */}
        </>
    )
}

export default AddOrganizator