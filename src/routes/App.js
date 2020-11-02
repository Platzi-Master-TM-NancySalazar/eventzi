import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Event from "../pages/Event";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/singup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route path="/event" component={Event} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
