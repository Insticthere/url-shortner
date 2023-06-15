import mongoose from "mongoose";
import connectMongo from "@/utils/connectMongo";

const urlSchema = new mongoose.Schema({
  id: { type: String  },
  url: { type: String },
  createdAt: { type: Date },
});

const URL = mongoose.model("URL", urlSchema);

export default async function handler(req, res) {
  if (req.method !== "GET" || !req.query.id) {
    return res.status(400).json("Please provide a valid ID or use the correct method.");
  }

  const id = req.query.id;

  await connectMongo();

  try {
    const url = await URL.findOne({ id });

    if (!url) {
      return res.status(200).json("URL not found.");
    }

    res.json(url.url);
    
  } catch (err) {
    console.log(err);
    res.status(500).json("An error occurred while retrieving the URL.");
  }
}