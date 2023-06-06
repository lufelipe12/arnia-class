import { charactersRepository } from "../../database/repositories/characters.repository";

export async function updateCharacterService(id: string, payload: any) {
  try {
    const character = await charactersRepository.findById(id);

    if (!character) {
      return {
        message: "Character not found.",
        statusCode: 404,
        data: null,
      };
    }

    const characterUpdated = await charactersRepository.update(
      character._id,
      payload
    );

    return {
      message: "Character updated successfully",
      statusCode: 200,
      data: characterUpdated,
    };
  } catch (error: any) {
    return {
      message: error.message || "Internal server error.",
      statusCode: error.message ? 400 : 500,
      data: null,
    };
  }
}
