import React from "react";
import {Route, Switch} from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Inventory from "../pages/Inventory";
import Status from "../pages/Status";

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' component={Dashboard} exact />
    <Route path='/inventories' component={Inventory} />
    <Route path='/status' component={Status} />
  </Switch>
);

export default Routes;