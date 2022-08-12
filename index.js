import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { CRMrouter } from "./router/routes.js";
import { MongoClient } from "mongodb";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
const MONGO_URL= process.env.MONGO_URL;

//database connection function
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("database is connected");
  return client;
}
//database connection functioncall
export const client=await createConnection();


app.use("/", CRMrouter);

app.listen(PORT, console.log("server started"));
