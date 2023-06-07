import User, { IUser } from "../entities/user.entity";

class UsersRepository {
  async create(newUser: IUser) {
    return await User.create(newUser);
  }

  async find() {
    return await User.find();
  }

  async findById(id: string) {
    return await User.findById(id);
  }

  async findByName(name: string) {
    return await User.findOne({ name }).populate("characters");
  }

  async findByEmail(email: string) {
    return await User.findOne({ email }).select("+password");
  }

  async updateById(id: string, payload: any) {
    return await User.findByIdAndUpdate(id, payload);
  }

  async delete(id: string) {
    return await User.findByIdAndDelete(id);
  }
}

export const usersRepository = new UsersRepository();
