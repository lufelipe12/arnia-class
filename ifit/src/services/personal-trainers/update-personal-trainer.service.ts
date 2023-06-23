import { personalTrainerRepository } from "../../database/repositories/personal-trainer.repository";
import { IPersonalTrainerUpdate } from "../../interfaces/ipersonal-trainer-update.interface";

export async function updatePersonalTrainerService(
  id: string,
  payload: IPersonalTrainerUpdate
) {
  try {
    console.log("payload", payload);

    const personalTrainerUpdated = await personalTrainerRepository.update(
      id,
      payload
    );

    if (!personalTrainerUpdated) {
      return {
        statusCode: 404,
        message: `Personal trainer with this id: ${id} not found.`,
        data: null,
      };
    }

    return {
      statusCode: 200,
      message: "Personal trainer updated.",
      data: personalTrainerUpdated,
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
