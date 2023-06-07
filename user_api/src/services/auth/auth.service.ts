import * as bcrypt from "bcryptjs";
import { config } from "dotenv";
import * as jwt from "jsonwebtoken";

import { usersRepository } from "../../database/repositories/users.repository";

config();

export async function authService(email: string, password: string) {
  try {
    const user = await usersRepository.findByEmail(email);

    if (!user) {
      return {
        message: "Not valid email/password.",
        statusCode: 403,
        data: null,
      };
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return {
        message: "Not valid email/password.",
        statusCode: 403,
        data: null,
      };
    }

    const payload = {
      userId: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
    };

    const secretKey = process.env.JWT_SECRET_KEY as string;

    const options = {
      expiresIn: "1h",
    };

    const token = jwt.sign(payload, secretKey, options);

    return {
      message: "Logged in.",
      statusCode: 200,
      data: { token },
    };
  } catch (error: any) {
    return {
      message: error.message || "Internal server error.",
      statusCode: error.message ? 400 : 500,
      data: null,
    };
  }
}
