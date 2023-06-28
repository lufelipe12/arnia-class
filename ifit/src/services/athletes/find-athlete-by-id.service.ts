import { athletesRepository } from "../../database/repositories/athletes.repository";

export async function findAthleteByIdService(id: string) {
  try {
    const athlete = await athletesRepository.findById(id);

    if (!athlete) {
      return {
        statusCode: 404,
        message: `Athlete with this id: ${id} not found.`,
        data: null,
      };
    }

    return {
      statusCode: 200,
      message: "Athlete found.",
      data: athlete,
    };
  } catch (error: any) {
    console.log(error);

    return {
      statusCode: error.message ? 400 : 500,
      message: error.message || "Internal server error.",
      data: null,
    };
  }
}
