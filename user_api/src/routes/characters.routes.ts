import { Router } from "express";

import { CharactersController } from "../controllers/characters.controller";

const charactersRouter = Router();

charactersRouter.post("/", CharactersController.create);

charactersRouter.get("/", CharactersController.findAll);
charactersRouter.get("/:userId", CharactersController.findByUserId);

charactersRouter.put("/:id", CharactersController.update);

export default charactersRouter;
