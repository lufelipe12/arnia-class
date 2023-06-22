import { personalTrainerRepository } from "../../database/repositories/personal-trainer.repository";
import { IPersonalTrainer } from "../../interfaces/ipersonal-trainer.interface";

export async function findAllPersonalTrainersService() {
  try {
    const personalTrainers: IPersonalTrainer[] =
      await personalTrainerRepository.find();

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
