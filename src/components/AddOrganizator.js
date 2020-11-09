import React from 'react'
import { HiOutlineTrash } from "react-icons/hi";
import { HiPencil } from "react-icons/hi";

const AddOrganizator = ({badges}) =>{
<<<<<<< HEAD
=======
console.log('badges', badges)

>>>>>>> c1198238db90025602f6cea14d265b6ce3fe6d14
    return(
        <>
            {badges.map((data) => {
                return(
                    <div className='second__main-details' key={data.id_user}>
                        <div className='check'>
                            <input type='checkbox'/>
                            <p>{data.id_user}</p>
                        </div>
                        <p className='content-name'>{data.full_name}</p>
                        <p className='content-email'>{data.email}</p>
                        <p className='content-event'>{data.event_name}</p>
                        <div>
                            <a href='#'><HiPencil className='icon-details-pencil'/></a>
                            <a href='#'><HiOutlineTrash className='icon-details'/></a>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default AddOrganizator