import { Router } from "express";
import { AthletesController } from "../controllers/athletes.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const athleteRouter = Router();

athleteRouter.post("/", authMiddleware, AthletesController.create);

athleteRouter.get("/", AthletesController.find);
athleteRouter.get("/:id", AthletesController.findById);

athleteRouter.patch("/:id", authMiddleware, AthletesController.update);

athleteRouter.delete("/:id", authMiddleware, AthletesController.delete);

export default athleteRouter;
