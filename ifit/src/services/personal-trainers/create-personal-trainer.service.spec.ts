import * as bcrypt from "bcryptjs";

import { createPersonalTrainerService } from "./create-personal-trainer.service";
import { personalTrainerRepository } from "../../database/repositories/personal-trainer.repository";
import { IPersonalTrainer } from "../../interfaces/ipersonal-trainer.interface";

jest.mock("bcryptjs");

describe("Create personal trainer service", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("Should create a new personal trainer", async () => {
    const payload = {
      name: "Treinador de Futebol",
      email: "treinador.coach@gmail.com",
      phoneNumber: "+5534990099900",
      cref: "tyui123P/MG",
      sport: "soccer",
      password: "123456",
    } as IPersonalTrainer;

    const passwordToCompare =
      "$2a$10$DatgnqWW6z8mlpHe/dDjee7rrAIzqZg7O2S8vmZyQ4ylszsq5LXWW" as never;

    const bcryptSpy = jest
      .spyOn(bcrypt, "hash")
      .mockResolvedValue(passwordToCompare);

    const expectedReturn = {
      statusCode: 201,
      message: "Personal trainer created.",
      data: { ...payload, password: passwordToCompare },
    };

    const personalTrainerCreateRepository = jest
      .fn()
      .mockResolvedValue({ ...payload, password: passwordToCompare });
    personalTrainerRepository.create = personalTrainerCreateRepository;

    const response = await createPersonalTrainerService(payload);

    expect(response).toEqual(expectedReturn);
    expect(bcryptSpy).toBeCalledWith("123456", 10);
    expect(personalTrainerCreateRepository).toBeCalledWith({
      ...payload,
      password: passwordToCompare,
    });
  });
});
