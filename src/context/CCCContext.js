import React, { createContext, useState } from 'react'
export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [search, setSearch] = useState('')

  const value = {
    isAuth,
    setIsAuth,
    search,
    setSearch
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}
export default {
  Provider,
  Consumer: Context.Consumer
}
