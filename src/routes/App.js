import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

<<<<<<< HEAD
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import SignUp from '../pages/SignUp'
import SignUp2 from '../pages/SignUp2'
import Login from '../pages/Login'
import Template1 from '../pages/Template1'
import { Context } from '../context/Context'

=======
import Layout from "../components/Layout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Event from "../pages/Event";
import EventPanel from "../pages/EventPanel";
import NotFound from "../pages/NotFound";

import { Context } from "../context/Context";

>>>>>>> e56c3c3e41a6fffdaebd7ca604fd0dc59d1d1086
const App = () => {
  const { isAuth } = useContext(Context);
  console.log(isAuth);
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {isAuth ? (
            <Route exact path="/" component={Home} />
          ) : (
            <Route exact path="/" component={Login} />
          )}
          {isAuth ? (
            <Route exact path="/eventPanel" component={EventPanel} />
          ) : (
            <Route exact path="/eventPanel" component={Login} />
          )}
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/event" component={Event} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

<<<<<<< HEAD
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
=======
export default App;
>>>>>>> e56c3c3e41a6fffdaebd7ca604fd0dc59d1d1086
