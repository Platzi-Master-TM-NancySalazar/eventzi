import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Event from "../pages/Event";
import EventPanel from "../pages/EventPanel";
import NotFound from "../pages/NotFound";
import AdminPanel from "../pages/AdminPanel"

import { Context } from "../context/Context";

const App = () => {
  const { isAuth } = useContext(Context);
  console.log(isAuth);
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          {isAuth ? (
            <Route exact path="/eventPanel" component={EventPanel} />
          ) : (
            <Route exact path="/eventPanel" component={Login} />
          )}
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/admin_panel" component={AdminPanel} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
