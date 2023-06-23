import { Router } from "express";

import { PersonalTrainersController } from "../controllers/personal-trainers.controller";

const personalTrainersRouter = Router();

personalTrainersRouter.get("/", PersonalTrainersController.findAll);

personalTrainersRouter.post("/", PersonalTrainersController.create);

export default personalTrainersRouter;
