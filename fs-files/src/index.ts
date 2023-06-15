import fs from "fs";
import csvParser from "csv-parser";
import CityModel from "./database/entities/city.entity"; // Importe o modelo Address
import { connectToDatabase } from "./database/config";

(async () => {
  await connectToDatabase();
})();

fs.createReadStream("src/file/cities.csv")
  .pipe(csvParser())
  .on("data", async (data: any) => {
    console.log(data);

    const city = new CityModel({
      city: data.city,
    });

    await city.save();
  })
  .on("end", () => {
    console.log("Leitura do arquivo CSV concluída");
  });
