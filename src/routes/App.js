import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Event from '../pages/Event'
import NotFound from '../pages/NotFound'
import AdminPanel from '../pages/AdminPanel'

import { Context } from '../context/Context'

const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />

          {isAuth
            ? <Route exact path="/admin_panel" component={AdminPanel} />
            : <Route exact path="/admin_panel" component={Login} />
          }
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/events/:eventId" component={Event} />
          <Route exact path="/admin_panel" component={AdminPanel} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
