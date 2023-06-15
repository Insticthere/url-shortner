import { MongoClient } from "mongodb";
import connectMongo from "@/utils/connectMongo";

export default async function handler(req, res) {
  if (req.method !== "GET" || !req.query.id) {
    return res.status(400).json("Please provide a valid ID or use the correct method.");
  }

  const id = req.query.id;

  try {
    const client = await connectMongo();
    const db = client.db(); // Assuming your connectMongo function returns a MongoClient

    const url = await db.collection("urls").findOne({ id });

    if (!url) {
      return res.status(200).json("URL not found.");
    }

    res.json(url.url);
    
  } catch (err) {
    console.log(err);
    res.status(500).json("An error occurred while retrieving the URL.");
  }
}
