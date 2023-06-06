import Character, { ICharacter } from "../entities/character.entity";

class CharactersRepository {
  async create(payload: ICharacter) {
    return await Character.create(payload);
  }

  async find() {
    return await Character.find();
  }

  async findById(id: string) {
    return await Character.findById(id);
  }

  async findByUserId(userId: string) {
    return await Character.find({ user: userId }).populate("user");
  }

  async update(id: string, payload: any) {
    return await Character.findByIdAndUpdate(id, payload).exec();
  }
}

export const charactersRepository = new CharactersRepository();
