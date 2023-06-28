import { Router } from "express";

import { reqInfoMiddleware } from "../middlewares/req-info.middleware";
import personalTrainersRouter from "./personal-trainer.routes";
import authRouter from "./auth.routes";
import athleteRouter from "./athlete.routes";

const routes = Router();

routes.use(reqInfoMiddleware);

routes.use("/auth", authRouter);
routes.use("/personal-trainers", personalTrainersRouter);
routes.use("/athletes", athleteRouter);

export default routes;
