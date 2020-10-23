import React from "react";
import {Route, Switch} from "react-router-dom";
import Brands from "../pages/Brands";
import Companys from "../pages/Companys";
import Dashboard from "../pages/Dashboard";
import States from "../pages/States";
import Status from "../pages/Status";
import Permissions from "../pages/Permissions";
import Situations from "../pages/Situations";
import Sectors from "../pages/Sectors";
import Users from "../pages/Users";
import Equipments from "../pages/Equipments";
import Branchs from "../pages/Branchs";
import Terms from "../pages/Terms";


const Routes: React.FC = () => (
  <Switch>
    <Route path='/dashboard' component={Dashboard} exact />
    <Route path='/dashboard/brands' component={Brands} />
    <Route path='/dashboard/branchs' component={Branchs} />
    <Route path='/dashboard/companys' component={Companys} />
    <Route path='/dashboard/equipments' component={Equipments} />
    <Route path='/dashboard/status' component={Status} />
    <Route path='/dashboard/permissions' component={Permissions} />
    <Route path='/dashboard/sectors' component={Sectors} />
    <Route path='/dashboard/situations' component={Situations} />
    <Route path='/dashboard/states' component={States}  />
    <Route path='/dashboard/terms' component={Terms} />
    <Route path='/dashboard/users' component={Users} />
  </Switch>
);

export default Routes;