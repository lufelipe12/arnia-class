import { athletesRepository } from "../../database/repositories/athletes.repository";
import { IAthlete } from "../../interfaces/iathlete.interface";

export async function createAthleteService(payload: IAthlete) {
  try {
    const { personalTrainerSport, sport } = payload as any;

    if (personalTrainerSport !== sport) {
      return {
        statusCode: 400,
        message: "Your sport needs to be equal for your athlete.",
        data: null,
      };
    }

    const newAthlete = await athletesRepository.create(payload);

    return {
      statusCode: 201,
      message: "Athlete created.",
      data: newAthlete,
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
