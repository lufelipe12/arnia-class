import { config } from "dotenv";
import mongoose from "mongoose";

config();

export async function databaseConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);

    console.log("Connected to database.");
  } catch (error) {
    console.log("Something went wrong with database connection.");
  }
}
