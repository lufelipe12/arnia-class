import { IUser } from "../../database/entities/user.entity";
import { usersRepository } from "../../database/repositories/users.repository";

export async function updateUserService(userId: string, payload: IUser) {
  try {
    const userUpdated = await usersRepository.updateById(userId, payload);

    return {
      message: "User updated",
      statusCode: 200,
      data: userUpdated,
    };
  } catch (error: any) {
    return {
      message: error.message || "Internal server error",
      statusCode: error.message ? 400 : 500,
      data: null,
    };
  }
}
