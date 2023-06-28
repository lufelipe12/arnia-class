import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

import { personalTrainerRepository } from "../../database/repositories/personal-trainer.repository";

export async function loginService(data: { email: string; password: string }) {
  try {
    const personalTrainer = await personalTrainerRepository.findByEmail(
      data.email
    );

    if (!personalTrainer) {
      return {
        statusCode: 404,
        message: "Invalid email/password.",
        data: null,
      };
    }

    const isValidPassword = bcrypt.compareSync(
      data.password,
      personalTrainer.password
    );

    if (!isValidPassword) {
      return {
        statusCode: 404,
        message: "Invalid email/password.",
        data: null,
      };
    }

    const payload = {
      personalTrainerId: personalTrainer._id,
      email: personalTrainer.email,
      personalTrainerSport: personalTrainer.sport,
    };

    const options = {
      expiresIn: "1h",
    };

    const secretKey = process.env.SECRET_KEY as string;

    const token = jwt.sign(payload, secretKey, options);

    return {
      statusCode: 200,
      message: "Logged in.",
      data: { token },
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
