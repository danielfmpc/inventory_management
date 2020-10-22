import React from "react";
import {Route, Switch} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Status from "../pages/Status";


const Routes: React.FC = () => (
  <Switch>
    <Route path='/' component={Dashboard} exact />
    <Route path='/status' component={Status} />
    <Route path='/branchs' />
    <Route path='/brands' />
    <Route path='/companys' />
    <Route path='/permissions' />
    <Route path='/sectors' />
    <Route path='/states' />
    <Route path='/terms' />
    <Route path='/situations' />
    <Route path='/users' />
    <Route path='/equipments' />
  </Switch>
);

export default Routes;