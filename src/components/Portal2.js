import React from 'react'
import ReactDOM from 'react-dom'

const Portal2 = ({children}) =>{
    return(
        <>
            {children}
            {/* {ReactDOM.createPortal(children, document.getElementById('modal'))} */}
        </>
    )
}

export default Portal2