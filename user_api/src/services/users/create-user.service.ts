import { IUser } from "../../database/entities/user.entity";
import { usersRepository } from "../../database/repositories/users.repository";

export async function createUserService(payload: IUser) {
  try {
    const newUser = await usersRepository.create(payload);

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
      message: "Internal server error.",
      statusCode: 500,
      data: null,
    };
  }
}
