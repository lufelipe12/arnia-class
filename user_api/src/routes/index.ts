import { Router } from "express";

import usersRouter from "./users.routes";
import charactersRouter from "./characters.routes";
import authRouter from "./auth.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/characters", charactersRouter);
routes.use("/auth", authRouter);

export default routes;
