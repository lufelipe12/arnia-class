import { Router } from "express";

import personalTrainersRouter from "./personal-trainer.routes";
import authRouter from "./auth.routes";

const routes = Router();

routes.use("/auth", authRouter);
routes.use("/personal-trainers", personalTrainersRouter);

export default routes;
