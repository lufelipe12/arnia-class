import { object, string } from "yup";

import { ICharacter } from "../../database/entities/character.entity";
import { charactersRepository } from "../../database/repositories/characters.repository";
import { usersRepository } from "../../database/repositories/users.repository";

const charactersYupSchema = object({
  vocation: string()
    .matches(/(Sorcerer|Druid)/, {
      message: "Just Sorcerer and Druid vocations are allowed.",
    })
    .required("Vocation field is required."),
});

export async function createCharacterService(payload: ICharacter) {
  try {
    await charactersYupSchema.validate(payload);

    const { userId } = payload;

    const characterCreated = await charactersRepository.create(payload);

    const userFound = await usersRepository.findById(userId);
    userFound?.characters.push(characterCreated._id);
    userFound?.save();

    return {
      message: "Character created.",
      statusCode: 201,
      data: characterCreated,
    };
  } catch (error: any) {
    if (error.errors) {
      return {
        message: error.message,
        statusCode: 400,
        data: null,
      };
    }

    return {
      message: error.message || "Internal server error",
      statusCode: error.message ? 400 : 500,
      data: null,
    };
  }
}
