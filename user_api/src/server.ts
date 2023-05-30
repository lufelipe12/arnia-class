import { config } from "dotenv";

import app from "./app";

config();

(async () => {
  app.listen(process.env.APP_PORT || 3333, () => {
    console.log(`App is running on port ${process.env.APP_PORT || 3333}`);
  });
})();
