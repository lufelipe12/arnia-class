import { personalTrainerRepository } from "../../database/repositories/personal-trainer.repository";

export async function deletePersonalTrainerService(id: string) {
  try {
    const personalTrainerDeleted = await personalTrainerRepository.delete(id);

    if (!personalTrainerDeleted) {
      return {
        statusCode: 404,
        message: `Personal trainer with this id: ${id} not found.`,
        data: null,
      };
    }

    return {
      statusCode: 200,
      message: "Personal trainer deleted.",
      data: personalTrainerDeleted,
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
