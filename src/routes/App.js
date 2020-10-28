import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import SignUp from '../pages/SignUp'
import SignUp2 from '../pages/SignUp2'
import Login from '../pages/Login'
import Template1 from '../pages/Template1'


const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/admin' component={Admin} />
                <Route exact path='/singup' component={SignUp} />
                <Route exact path='/signup2' component={SignUp2} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/template1' component={Template1} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App