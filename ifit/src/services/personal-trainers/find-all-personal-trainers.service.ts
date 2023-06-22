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
    return {
      statusCode: 500,
      message: "Internal server error.",
      data: null,
    };
  }
}
