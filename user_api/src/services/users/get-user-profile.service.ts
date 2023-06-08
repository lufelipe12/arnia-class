import { usersRepository } from "../../database/repositories/users.repository";

export async function getUsersProfileService(userId: string) {
  try {
    const profile = await usersRepository.findById(userId);

    return {
      message: "Users profile.",
      statusCode: 200,
      data: profile,
    };
  } catch (error: any) {
    return {
      message: error.message || "Internal server error.",
      statusCode: error.message ? 400 : 500,
      data: null,
    };
  }
}
