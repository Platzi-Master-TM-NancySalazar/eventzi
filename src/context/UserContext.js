import React, { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [isAuth, setIsAuth] = useState([])
    return (
        <UserContext.Provider value={[isAuth, setIsAuth]}>
            {props.children}
        </UserContext.Provider>
    )
}