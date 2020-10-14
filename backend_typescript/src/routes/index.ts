import Router from "express";
import sectorsRouter from "./sectors.routes";
import statesRouter from "./states.routes";
import statusRouter from "./status.routes";
import usersRouter from "./users.routes";

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/status', statusRouter);
routes.use('/states', statesRouter);
routes.use('/sectors', sectorsRouter);

export default routes;