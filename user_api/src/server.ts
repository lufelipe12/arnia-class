import { config } from "dotenv";

import app from "./app";
import { connectToDatabase } from "./database/config";
import { usersRepository } from "./database/repositories/users.repository";
import Character from "./database/entities/character.entity";

config();

(async () => {
  await connectToDatabase();

  // const user = (await usersRepository.findByName("Luiz Felipe")) as any;

  // const newCharacter = await Character.create({
  //   nickname: "Pandim",
  //   vocation: "Druid",
  //   user: user?._id,
  // });

  // user?.characters.push(newCharacter._id);

  // await user?.save();

  app.listen(process.env.APP_PORT || 3333, () => {
    console.log(`App is running on port ${process.env.APP_PORT || 3333}`);
  });
})();
