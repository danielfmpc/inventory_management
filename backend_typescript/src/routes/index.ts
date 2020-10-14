import Router from "express";
import statusRouter from "./status.routes";
import usersRouter from "./users.routes";

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/status', statusRouter);

export default routes;