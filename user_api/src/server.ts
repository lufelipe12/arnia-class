import { config } from "dotenv";

import app from "./app";
import { connectToDatabase } from "./database/config";

config();

(async () => {
  await connectToDatabase();

  app.listen(process.env.APP_PORT || 3333, () => {
    console.log(`App is running on port ${process.env.APP_PORT || 3333}`);
  });
})();
