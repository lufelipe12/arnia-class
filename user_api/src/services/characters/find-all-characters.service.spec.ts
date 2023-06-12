import { charactersRepository } from "../../database/repositories/characters.repository";
import { findAllCharactersService } from "./find-all-characters.service";

describe("Testing find all characters service", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("Should get all characters", async () => {
    const characters = [
      { nickName: "Druidzin", vocation: "Druid" },
      { nickName: "Sorczin", vocation: "Sorcerer" },
    ];

    const findMock = jest.fn().mockResolvedValue(characters);
    charactersRepository.find = findMock;

    const expectedResponse = {
      message: "Characters found.",
      statusCode: 200,
      data: characters,
    };

    const response = await findAllCharactersService();

    expect(findMock).toHaveBeenCalled();
    expect(response).toEqual(expectedResponse);
  });
});
