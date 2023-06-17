import fs from "fs";
import csvParser from "csv-parser";

import CustomerModel from "./database/entities/customer.entity";
import { databaseConnect } from "./database/config";

(async () => {
  await databaseConnect();
})();

fs.createReadStream("src/files/customers.csv")
  .pipe(csvParser())
  .on("data", async (data: any) => {
    const customer = new CustomerModel({
      name: data.name,
      email: data.email,
      cpf: data.cpf,
    });

    await customer.save();
  })
  .on("end", () => {
    console.log("End of csv file.");
  });
