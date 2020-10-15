import Router from "express"
;
import brandsRouter from "./brands.routes";
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

export default routes;