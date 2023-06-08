import { usersRepository } from "../../database/repositories/users.repository";

export async function findUserByIdService(id: string) {
  try {
    const user = await usersRepository.findById(id);

    if (!user) {
      return {
        message: `User with name: ${id} not found.`,
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
      message: error.message || "Internal server error.",
      statusCode: error.message ? 400 : 500,
      data: null,
    };
  }
}
