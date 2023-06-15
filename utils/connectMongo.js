import { MongoClient } from "mongodb";

const connectMongo = async () => {
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  return client;
};

export default connectMongo;
