import { Router } from "express";
import personalTrainersRouter from "./personal-trainer.routes";

const routes = Router();

routes.use("/personal-trainers", personalTrainersRouter);

export default routes;
