import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Event from "../pages/Event";
import EventPanel from "../pages/EventPanel";
import NotFound from "../pages/NotFound";
import AdminConsole from '../pages/AdminConsole';

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
          <Route exact path="/admin" component={AdminConsole} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
