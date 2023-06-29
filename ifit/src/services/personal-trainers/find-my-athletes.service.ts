import { athletesRepository } from "../../database/repositories/athletes.repository";

export async function findMyAthletesService(personalTrainerId: string) {
  try {
    const myAthletes = await athletesRepository.findByPersonalId(
      personalTrainerId
    );

    return {
      statusCode: 200,
      message: "Your athletes.",
      data: myAthletes,
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
