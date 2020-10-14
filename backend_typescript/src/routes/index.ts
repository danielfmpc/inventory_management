import Router from "express";
import stateRouter from "./states.routes";
import statusRouter from "./status.routes";
import usersRouter from "./users.routes";

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/status', statusRouter);
routes.use('/states', stateRouter);

export default routes;