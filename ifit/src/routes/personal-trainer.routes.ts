import { Router } from "express";

import { PersonalTrainersController } from "../controllers/personal-trainers.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const personalTrainersRouter = Router();

personalTrainersRouter.get("/", PersonalTrainersController.findAll);
personalTrainersRouter.get(
  "/:id",
  authMiddleware,
  PersonalTrainersController.findById
);

personalTrainersRouter.post("/", PersonalTrainersController.create);

personalTrainersRouter.patch("/:id", PersonalTrainersController.update);

personalTrainersRouter.delete("/:id", PersonalTrainersController.delete);

export default personalTrainersRouter;
