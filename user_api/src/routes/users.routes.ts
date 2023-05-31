import { Router } from "express";

import { UsersController } from "../controllers/users.controller";

const usersRouter = Router();

usersRouter.post("/", UsersController.create);

usersRouter.get("/:name", UsersController.findByName);

export default usersRouter;
