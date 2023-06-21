import app from "./app";
import { databaseConnect } from "./database/config";

(async () => {
  await databaseConnect();

  app.listen(process.env.APP_PORT || 3333, () => {
    console.log(`App is listening on port: ${process.env.APP_PORT || 3333}`);
  });
})();
