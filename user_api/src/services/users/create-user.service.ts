import bcrypt from "bcryptjs";

import { IUser } from "../../database/entities/user.entity";
import { usersRepository } from "../../database/repositories/users.repository";

export async function createUserService(payload: IUser) {
  try {
    const { password } = payload;

    const passwordHashed = await bcrypt.hash(password, 10);

    const newUser = await usersRepository.create({
      ...payload,
      password: passwordHashed,
    } as any);

    return {
      message: "User created.",
      statusCode: 201,
      data: newUser,
    };
  } catch (error: any) {
    if (error.errors) {
      return {
        message: error.message,
        statusCode: 400,
        data: null,
      };
    }

    return {
      message: error.message || "Internal server error.",
      statusCode: error.message ? 400 : 500,
      data: null,
    };
  }
}
