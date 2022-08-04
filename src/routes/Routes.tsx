import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";
import Welcome from "../pages/Welcome/Welcome";
import Dashboard from "../pages/Dashboard/Dashboard";
import Administrator from "../pages/Administrator/Administrator";
import Products from "../pages/Products/Products";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Welcome} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/admin" exact component={Administrator} isPrivate />
    <Route path="/products" exact component={Products} />
  </Switch>
);

export default Routes;
