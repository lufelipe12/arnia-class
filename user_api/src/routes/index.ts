import { Router } from "express";

import usersRouter from "./users.routes";
import charactersRouter from "./characters.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/characters", charactersRouter);

export default routes;
