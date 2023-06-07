import { Router } from "express";

import { CharactersController } from "../controllers/characters.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const charactersRouter = Router();

charactersRouter.get("/", CharactersController.findAll);
charactersRouter.get("/:userId", CharactersController.findByUserId);

charactersRouter.use(authMiddleware);

charactersRouter.post("/", CharactersController.create);
charactersRouter.put("/:id", CharactersController.update);

export default charactersRouter;
