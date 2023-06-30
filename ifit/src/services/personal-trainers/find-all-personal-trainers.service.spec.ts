import { personalTrainerRepository } from "../../database/repositories/personal-trainer.repository";
import { findAllPersonalTrainersService } from "./find-all-personal-trainers.service";

describe("Find all personal trainers service", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("Should return an array of personal trainers", async () => {
    const personalTrainers = [
      {
        name: "Luizim Handzero",
        email: "luizdohand@g.com",
        phoneNumber: "34998989799",
        cref: "lkz123321/MG",
        sport: "handball",
        isActive: true,
      },
      {
        name: "Luiz Felipe",
        email: "luiz.ifit@g.com",
        phoneNumber: "34999999999",
        cref: "lkz1210066/MG",
        sport: "basketball",
        isActive: true,
      },
      {
        name: "Teste de login",
        email: "testzim.ifit@g.com",
        phoneNumber: "34999999999",
        cref: "lfqwer1234/MG",
        sport: "soccer",
        isActive: true,
      },
    ];

    const findMock = jest.fn().mockResolvedValue(personalTrainers);
    personalTrainerRepository.find = findMock;

    const expectedResult = {
      statusCode: 200,
      message: "Personal trainers.",
      data: personalTrainers,
    };

    const filter = {};

    const response = await findAllPersonalTrainersService(filter);

    expect(findMock).toHaveBeenCalled();
    expect(response).toEqual(expectedResult);
    expect(response.data?.length).toEqual(3);
  });
});
