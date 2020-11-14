// import React, { useState } from 'react'
// import Lecturer from './Lecturer'
// import Agenda from './Agenda'
// import General from './General'
// import Associates from './Associates'
// import ApiEventzi from '../utils/ApiEventzi'

// export default function Edit() {
//     const [organization, setOrganization] = useState('')
//     const [organizationOptions, setOrganizationOptions] = useState([])

//     React.useEffect(() => {
//         ApiEventzi.getOrganizations()
//             .then((data) => {
//                 let orgInfo = data.data.data
//                 console.log(orgInfo)
//                 setOrganizationOptions(orgInfo)
//             })
//     }, [])
//     console.log('organization opt', organizationOptions)
//     const organizationId = organization
//     console.log('organizationId', organizationId)
//     return (
//         <>
//             <label htmlFor="organization">Organization
//             <select
//                     className="edit__organization"
//                     id="organization"
//                     onChange={(e) => {
//                         setOrganization(e.target.value)
//                     }}
//                 >
//                     <option defaultValue></option>
//                     {organizationOptions.map((option) => (
//                         <option id={option.id_organization}>{option.organization_name}</option>
//                     ))}

//                 </select>
//             </label>
//             <div className="configuration">

//                 <div className="configurarion__general">
//                     <General organizationId={organizationId} />
//                 </div>

//                 <div className="configurarion__lecturer">
//                     <Lecturer organizationId={organizationId} />
//                 </div>

//                 <div className="configurarion__agenda">
//                     <Agenda organizationId={organizationId} />
//                 </div>

//                 <div className="configurarion__associates">
//                     <Associates organizationId={organizationId} />
//                 </div>
//             </div>
//         </>
//     )
// }

