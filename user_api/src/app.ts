import express, { NextFunction, Request, Response } from "express";

import routes from "./routes";
import { infoLogRequestMiddleware } from "./middlewares/info-log-request.middleware";

const app = express();

app.use(express.json());

app.use(infoLogRequestMiddleware);

app.use(routes);

export default app;
