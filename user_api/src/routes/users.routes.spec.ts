import request from "supertest";
import mongoose from "mongoose";
import { config } from "dotenv";

import app from "../app";

config();

describe("Testing users routes", () => {
  let userId: string;
  let token: string;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL as string);

    const newUser = await request(app).post("/users").send({
      name: "New user test",
      email: "test12@gmail.com",
      age: 25,
      password: "654321",
      isAdmin: true,
    });

    userId = newUser.body.data._id;

    const response = await request(app).post("/auth").send({
      email: "test12@gmail.com",
      password: "654321",
    });

    token = response.body.data.token;
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("POST /users - Should create an user", async () => {
    const response = await request(app).post("/users").send({
      name: "Luiz Felipe Dias Test",
      email: "test@gmail.com",
      age: 18,
      password: "senhaforte123",
    });

    const user = response.body.data;

    expect(user).toHaveProperty("_id");
    expect(user.age).toEqual(18);
    expect(user.password.length).toBeGreaterThan(12);
  });

  it("GET -> /users/:id - Should get an existing user", async () => {
    const response = await request(app).get(`/users/${userId}`);

    const user = response.body.data;

    expect(user._id).toBeTruthy();
    expect(user.email).toEqual("test12@gmail.com");
  });

  it("GET -> /users/profile - Should get a profile by token", async () => {
    console.log("token", token);

    const response = await request(app)
      .get("/users/profile")
      .set({ Authorization: `Bearer ${token}` });

    const profile = response.body.data;
    console.log("profile", profile);

    expect(profile.email).toEqual("test12@gmail.com");
    expect(profile.isAdmin).toEqual(true);
  });

  it("POST /users - Should not create an user without name - ERROR", async () => {
    const response = await request(app).post("/users").send({
      email: "testin@g.com",
      age: 30,
      password: "123456",
    });

    expect(response.statusCode).toEqual(400);
    expect(response.body).toHaveProperty("message");
  });

  it("GET /users/:id - Should not get an user with wrong id - ERROR", async () => {
    const response = await request(app).get("/users/648126bf0b0ee75372cf1761");

    expect(response.statusCode).toEqual(404);
  });
});
