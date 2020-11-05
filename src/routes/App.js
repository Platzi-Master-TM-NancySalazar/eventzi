import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Event from "../pages/Event";
import EventPanel from "../pages/EventPanel";
import NotFound from "../pages/NotFound";
<<<<<<< HEAD
import AdminConsole from '../pages/AdminConsole';
=======
import AdminConsol from "../pages/AdminConsol"
import Charts from "../pages/Charts"
import Admin from "../pages/Admin"
>>>>>>> 48785e396bc8856ae2f18ae454377500ab8ed468

import { Context } from "../context/Context";

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
<<<<<<< HEAD
          <Route exact path="/admin" component={AdminConsole} />
=======
          <Route exact path="/admin" component={AdminConsol} />
          <Route exact path="/admin2" component={Admin} />
          <Route exact path="/charts" component={Charts} />
>>>>>>> 48785e396bc8856ae2f18ae454377500ab8ed468
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
