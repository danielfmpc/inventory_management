import React from "react";
import {Route, Switch} from "react-router-dom";
import Brands from "../pages/Brands";
import Companys from "../pages/Companys";
import Dashboard from "../pages/Dashboard";
import States from "../pages/States";
import Status from "../pages/Status";
import Permissions from "../pages/Permissions";


const Routes: React.FC = () => (
  <Switch>
    <Route path='/' component={Dashboard} exact />
    <Route path='/status' component={Status} />
    <Route path='/branchs' />
    <Route path='/brands' component={Brands} />
    <Route path='/companys' component={Companys} />
    <Route path='/permissions' component={Permissions} />
    <Route path='/sectors' />
    <Route path='/states' component={States}  />
    <Route path='/terms' />
    <Route path='/situations' />
    <Route path='/users' />
    <Route path='/equipments' />
  </Switch>
);

export default Routes;