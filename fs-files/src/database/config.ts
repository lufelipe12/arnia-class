import { config } from "dotenv";
import mongoose from "mongoose";

config();

export async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);

    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting with database", error);
  }
}
