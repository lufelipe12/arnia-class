import Character, { ICharacter } from "../entities/character.entity";

class CharactersRepository {
  async create(payload: ICharacter) {
    return await Character.create(payload);
  }
}

export const charactersRepository = new CharactersRepository();
