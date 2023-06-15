import mongoose from "mongoose";
import { nanoid } from 'nanoid'
import connectMongo from "@/utils/connectMongo";

const urlSchema = new mongoose.Schema({
  id: { type: String, default: () => nanoid(8), unique: true },
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const URL = mongoose.model("URL", urlSchema);

export default async function handler(req, res) {
  if (req.method !== "GET" || !req.query.url)
    return res.status(400).json({ error: "Please provide a URL or use the correct method." });

  const resurl = req.query.url;

  await connectMongo();

  const id = nanoid(8);

  const url = new URL({
    id,
    url: resurl,
    createdAt: new Date(),
  });

  try {
    await url.save();
    res.status(200).json({ id });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occurred while saving the URL." });
  }
}