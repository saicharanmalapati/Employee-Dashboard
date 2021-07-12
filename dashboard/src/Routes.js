import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
