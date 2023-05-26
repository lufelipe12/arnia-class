import { Router } from "express";

import shoesRouter from "./shoes.routes";

const routes = Router();

routes.use("/shoes", shoesRouter);

export default routes;
