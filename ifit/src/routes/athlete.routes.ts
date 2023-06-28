import { Router } from "express";
import { AthletesController } from "../controllers/athletes.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const athleteRouter = Router();

athleteRouter.post("/", authMiddleware, AthletesController.create);

athleteRouter.get("/", AthletesController.find);

export default athleteRouter;
