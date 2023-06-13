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
      password: "senha1234",
    } as IUser;

    const passwordHashed = await bcrypt.hash(payload.password, 10);

    (bcrypt.hash as jest.Mock).mockResolvedValue(passwordHashed);

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
    expect(bcrypt.hash).toBeCalledWith("senha1234", 10);
    expect(usersCreateRepositoryMock).toBeCalledWith({
      ...payload,
      password: passwordHashed,
    });
  });
});
