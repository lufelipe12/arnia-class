import express from "express";
import { config } from "dotenv";

import routes from "./routes";

config();

const app = express();

app.use(express.json());

app.use(routes);

export default app;
