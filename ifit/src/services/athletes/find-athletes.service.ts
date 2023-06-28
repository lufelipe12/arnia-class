import { athletesRepository } from "../../database/repositories/athletes.repository";

export async function findAthletesService() {
  try {
    const athletes = await athletesRepository.find();

    return {
      statusCode: 200,
      message: "Athletes found.",
      data: athletes,
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
