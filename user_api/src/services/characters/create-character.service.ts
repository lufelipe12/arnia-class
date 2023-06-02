import { ICharacter } from "../../database/entities/character.entity";
import { charactersRepository } from "../../database/repositories/characters.repository";
import { usersRepository } from "../../database/repositories/users.repository";

export async function createCharacterService(payload: ICharacter) {
  try {
    const { nickname, vocation, user } = payload;

    const userFound = (await usersRepository.findById(user)) as any;

    if (!userFound) {
      return {
        message: "User not found.",
        statusCode: 400,
        data: null,
      };
    }

    const characterCreated = await charactersRepository.create(payload);

    userFound.characters.push(characterCreated._id);
    userFound.save();

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
