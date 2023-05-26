import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://arnia:arnia123@arnia-db.ygd6ua3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

const newDb = "skate-shop";
const newCollection = "shoes";

const database = client.db(newDb).collection(newCollection);

export default database;
