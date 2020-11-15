import React, { useState } from 'react'

const Context = React.createContext({})

export function GlobalContextProvider ({ children }) {
  const [user, setUser] = useState({
    userId: null,
    userName: '',
    isAuth: false
  })

  const [alert, setAlert] = useState({
    show: false,
    type: null,
    message: ''
  })

  const [search, setSearch] = useState('')

  function sendAlert ({ show, type, message }) {
    setAlert({
      show, type, message
    })
    setTimeout(() => {
      setAlert({
        show: false,
        type: null,
        message: ''
      })
    }, 5000)
  }

  function logout () {
    setUser({
      userId: null,
      userName: '',
      isAuth: false
    })
    setAlert({
      show: false,
      type: null,
      message: ''
    })
  }

  return (
    <Context.Provider value={{ user, setUser, logout, alert, sendAlert, search, setSearch }}>
      {children}
    </Context.Provider>
  )
}

export default Context
