import { Router } from "express";

import { PersonalTrainersController } from "../controllers/personal-trainers.controller";

const personalTrainersRouter = Router();

personalTrainersRouter.get("/", PersonalTrainersController.findAll);
personalTrainersRouter.get("/:id", PersonalTrainersController.findById);

personalTrainersRouter.post("/", PersonalTrainersController.create);

personalTrainersRouter.patch("/:id", PersonalTrainersController.update);

export default personalTrainersRouter;
