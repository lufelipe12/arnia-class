import { usersRepository } from "../../database/repositories/users.repository";

export async function getAllUsersService() {
  try {
    const users = await usersRepository.find();

    return {
      message: "Users found.",
      statusCode: 200,
      data: users,
    };
  } catch (error: any) {
    return {
      message: error.message || "Internal server error.",
      statusCode: error.message ? 400 : 500,
      data: null,
    };
  }
}
