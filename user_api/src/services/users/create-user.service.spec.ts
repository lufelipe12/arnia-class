import * as bcrypt from "bcryptjs";

import { usersRepository } from "../../database/repositories/users.repository";
import { createUserService } from "./create-user.service";
import { IUser } from "../../database/entities/user.entity";

jest.mock("bcryptjs");

describe("Create user service test.", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("Should create a new User.", async () => {
    const payload = {
      name: "Luiz Felipe",
      email: "lf@g.com",
      age: 27,
      password: "123456",
    } as IUser;

    const passwordHashed =
      "$2a$10$Er9Sk5JFHb6wUpf6zIN73u/K579Ftpl8syF3AgDrrUhD6i/iznPpi" as never;

    const bcryptSpy = jest
      .spyOn(bcrypt, "hash")
      .mockResolvedValue(passwordHashed);

    const usersCreateRepositoryMock = jest.fn().mockResolvedValue({
      ...payload,
      password: passwordHashed,
    });
    usersRepository.create = usersCreateRepositoryMock;

    const expectedResult = {
      message: "User created.",
      statusCode: 201,
      data: { ...payload, password: passwordHashed },
    };

    const response = await createUserService(payload);

    expect(response).toEqual(expectedResult);
    expect(bcryptSpy).toBeCalledWith("123456", 10);
    expect(usersCreateRepositoryMock).toBeCalledWith({
      ...payload,
      password: passwordHashed,
    });
  });
});
