import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Template1 from '../pages/Template1'
import EventPanel from '../pages/EventPanel'
import AnalyticsPanel from '../pages/AnalyticsPanel'
import NotFound from '../pages/NotFound'

import { Context } from '../context/Context'


const App = () => {
  const { isAuth } = useContext(Context)
  console.log(isAuth)
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {isAuth ? <Route exact path='/template1' component={Template1} /> : <Route exact path='/template1' component={Login} />}
          {isAuth ? <Route exact path='/' component={Home} /> : <Route exact path='/' component={Login} />}
          {/* {isAuth ? <Route exact path='/eventPanel' component={EventPanel} /> : <Route exact path='/eventPanel' component={Login} />} */}
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/analyticsPanel' component={AnalyticsPanel} />
          <Route exact path='/eventPanel' component={EventPanel} />
          <Route component={NotFound} />

        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
