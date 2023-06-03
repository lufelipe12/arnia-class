import Character, { ICharacter } from "../entities/character.entity";

class CharactersRepository {
  async create(payload: ICharacter) {
    return await Character.create(payload);
  }

  async find() {
    return await Character.find();
  }

  async findByUserId(userId: string) {
    return await Character.find({ user: userId }).populate("user");
  }
}

export const charactersRepository = new CharactersRepository();
