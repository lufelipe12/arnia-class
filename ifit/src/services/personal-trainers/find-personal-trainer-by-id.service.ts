import { personalTrainerRepository } from "../../database/repositories/personal-trainer.repository";

export async function findPersonalTrainerByIdService(id: string) {
  try {
    const personalTrainer = await personalTrainerRepository.findById(id);

    if (!personalTrainer) {
      return {
        statusCode: 404,
        message: `Personal trainer with this id: ${id} not found.`,
        data: null,
      };
    }

    return {
      statusCode: 200,
      message: "Personal trainer found.",
      data: personalTrainer,
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
