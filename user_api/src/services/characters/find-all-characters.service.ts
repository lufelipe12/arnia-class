import { charactersRepository } from "../../database/repositories/characters.repository";

export async function findAllCharactersService() {
  try {
    const characters = await charactersRepository.find();

    return {
      message: "Characters found.",
      statusCode: 200,
      data: characters,
    };
  } catch (error: any) {
    return {
      message: error.message || "Internal server error.",
      statusCode: error.message ? 400 : 500,
      data: null,
    };
  }
}
