import { charactersRepository } from "../../database/repositories/characters.repository";

export async function findCharacterByUserIdService(userId: string) {
  try {
    const characters = await charactersRepository.findByUserId(userId);

    if (characters.length == 0) {
      return {
        message: "No character found.",
        statusCode: 404,
        data: characters,
      };
    }

    return {
      message: "Characters found.",
      statusCode: 200,
      data: characters,
    };
  } catch (error: any) {
    return {
      message: error.message || "Internal server error",
      statusCode: error.message ? 400 : 500,
      data: null,
    };
  }
}
