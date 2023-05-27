import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGO_URL as string;

const client = new MongoClient(url);

const newDb = "skate-shop";
const newCollection = "shoes";

const database = client.db(newDb).collection(newCollection);

export default database;
