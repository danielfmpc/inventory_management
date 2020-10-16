import Router from "express"
;
import branchsRouter from "./branchs.routes";
import brandsRouter from "./brands.routes";
import companysRouter from "./companys.routes";
import equipmentsRouter from "./euipments.routes";
import permissionsRouter from "./permissions.routes";
import sectorsRouter from "./sectors.routes";
import statesRouter from "./states.routes";
import statusRouter from "./status.routes";
import situationsRouter from "./stituations.routes";
import usersRouter from "./users.routes";

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/status', statusRouter);
routes.use('/states', statesRouter);
routes.use('/sectors', sectorsRouter);
routes.use('/situations', situationsRouter);
routes.use('/brands', brandsRouter);
routes.use('/permissions', permissionsRouter);
routes.use('/companys', companysRouter);
routes.use('/branchs', branchsRouter);
routes.use('/equipments', equipmentsRouter);

export default routes;