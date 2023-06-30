import { personalTrainerRepository } from "../../database/repositories/personal-trainer.repository";

export async function getProfileService(id: string) {
  try {
    const personalTrainer = await personalTrainerRepository.findById(id);
    console.log(personalTrainer);

    return {
      statusCode: 200,
      message: "Your profile.",
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
