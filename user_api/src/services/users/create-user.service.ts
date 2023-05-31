import { IUser } from "../../database/entities/user.entity";
import { usersRepository } from "../../database/repositories/users.repository";

export async function createUserService(payload: IUser) {
  try {
    const newUser = await usersRepository.create(payload);

    return newUser;
  } catch (error) {
    console.log(error);
  }
}
