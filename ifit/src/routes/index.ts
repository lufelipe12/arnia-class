import { Router } from "express";

import personalTrainersRouter from "./personal-trainer.routes";
import authRouter from "./auth.routes";
import { reqInfoMiddleware } from "../middlewares/req-info.middleware";

const routes = Router();

routes.use(reqInfoMiddleware);

routes.use("/auth", authRouter);
routes.use("/personal-trainers", personalTrainersRouter);

export default routes;
