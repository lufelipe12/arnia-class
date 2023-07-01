import app from "./app";
import { databaseConnect } from "./database/config";

(async () => {
  await databaseConnect();

  const port = process.env.PORT || 3333;

  app.listen(+port, "0.0.0.0", () => {
    console.log(`App is listening on port: ${+port}`);
  });
})();
