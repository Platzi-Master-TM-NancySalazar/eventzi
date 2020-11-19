import React, { useContext } from 'react'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Event from '../pages/Event'
import NotFound from '../pages/NotFound'
import AdminPanel from '../pages/AdminPanel'
import Test from '../pages/Test'

import globalContext from '../context/globalContext'

const App = () => {
  const { user } = useContext(globalContext)
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/events/:eventId" component={Event} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/admin_panel">
            {
              user.isAuth
                ? <AdminPanel />
                : <Redirect to='/login' />
            }
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Layout>

    </BrowserRouter>
  )
}

export default App
