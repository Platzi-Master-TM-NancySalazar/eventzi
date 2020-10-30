import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import SignUp from '../pages/SignUp'
import SignUp2 from '../pages/SignUp2'
import Login from '../pages/Login'
import Template1 from '../pages/Template1'
import { Context } from '../context/Context'

const App = () => {
    const { isAuth } = useContext(Context)
    // const isAuth = false

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    {isAuth ? <Route exact path='/template1' component={Template1} /> : <Route exact path='/template1' component={Login} />}
                    <Route exact path='/singup' component={SignUp} />
                    <Route exact path='/signup2' component={SignUp2} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/admin' component={Admin} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App