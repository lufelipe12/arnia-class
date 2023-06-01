import { usersRepository } from "../../database/repositories/users.repository";

export async function findUserByNameService(name: string) {
  try {
    const user = await usersRepository.findByName(name);

    if (!user) {
      return {
        message: `User with name: ${name} not found.`,
        statusCode: 404,
        data: null,
      };
    }

    return {
      message: "User found.",
      statusCode: 200,
      data: user,
    };
  } catch (error: any) {
    return {
      message: error.message,
      statusCode: 500,
      data: null,
    };
  }
}
