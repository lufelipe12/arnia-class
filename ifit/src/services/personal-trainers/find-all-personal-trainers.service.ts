import { personalTrainerRepository } from "../../database/repositories/personal-trainer.repository";
import { IPersonalTrainer } from "../../interfaces/ipersonal-trainer.interface";

export async function findAllPersonalTrainersService(filter: any) {
  try {
    const key = Object.keys(filter)[0];

    if (key && key !== "sport") {
      return {
        statusCode: 400,
        message: "You cant filter with this query.",
        data: null,
      };
    }

    const personalTrainers: IPersonalTrainer[] =
      await personalTrainerRepository.find(filter);

    return {
      statusCode: 200,
      message: "Personal trainers.",
      data: personalTrainers,
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
