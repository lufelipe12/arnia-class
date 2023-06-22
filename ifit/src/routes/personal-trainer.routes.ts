import { Router } from "express";
import { PersonalTrainersController } from "../controllers/personal-trainers.controller";

const personalTrainersRouter = Router();

personalTrainersRouter.get("/", PersonalTrainersController.findAll);

export default personalTrainersRouter;
