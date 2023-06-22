import * as bcrypt from "bcryptjs";

import { personalTrainerRepository } from "../../database/repositories/personal-trainer.repository";
import { IPersonalTrainer } from "../../interfaces/ipersonal-trainer.interface";

export async function createPersonalTrainerService(payload: IPersonalTrainer) {
  try {
    const { password } = payload;

    const newData = {
      ...payload,
      password: await bcrypt.hash(password, 10),
    };

    const newPersonalTrainer = await personalTrainerRepository.create(newData);

    return {
      statusCode: 201,
      message: "Personal trainer created.",
      data: newPersonalTrainer,
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
