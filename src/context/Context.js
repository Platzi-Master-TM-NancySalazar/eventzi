import React, { createContext, useState } from 'react'
export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [search, setSearch] = useState('')
  // const [isAuth, setIsAuth] = useState(() => {
  //     return window.sessionStorage.getItem('token')
  // })
  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true)
      // window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      // window.sessionStorage.removeItem('token')
    },
    search,
    setSearch
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}
export default {
  Provider,
  Consumer: Context.Consumer,
}
