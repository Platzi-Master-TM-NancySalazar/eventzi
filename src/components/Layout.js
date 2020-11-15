import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import Alert from './common/Alert'

import globalContext from '../context/globalContext'

function Layout (props) {
  const { alert } = useContext(globalContext)
  const { children } = props

  return (
    <>
      <Header />
      {children}
      <Alert {...alert} />
      <Footer />
    </>
  )
}

export default Layout
