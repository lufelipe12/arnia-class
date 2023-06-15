import { Router } from "express";

import { UsersController } from "../controllers/users.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const usersRouter = Router();

usersRouter.post("/", UsersController.create);

usersRouter.get("/", authMiddleware, UsersController.findAll);
usersRouter.get("/profile", authMiddleware, UsersController.profile);
usersRouter.get("/:id", UsersController.findById);

usersRouter.patch("/", authMiddleware, UsersController.update);

export default usersRouter;
