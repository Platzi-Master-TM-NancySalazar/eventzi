import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Event from "../pages/Event";
import EventPanel from "../pages/EventPanel";
import NotFound from "../pages/NotFound";
import AdminConsole from "../pages/AdminConsole";
import Charts from "../pages/Charts";
import Admin from "../pages/Admin";

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
          <Route exact path="/events/:eventId" component={Event} />
          <Route exact path="/admin" component={AdminConsole} />
          <Route exact path="/admin2" component={Admin} />
          <Route exact path="/charts" component={Charts} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
