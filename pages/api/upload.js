import { nanoid } from "nanoid";
import connectMongo from "@/utils/connectMongo";
let regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

export default async function handler(req, res) {
  if (req.method !== "GET" || !req.query.url)
    return res.status(400).json({ error: "Please provide a URL or use the correct method." });

    if (!req.query.url.match(regex))
      return res.status(400).json({ error: "Please provide a valid URL." });

  const resurl = req.query.url;

  try {
    const client = await connectMongo();
    const db = client.db();

    const id = nanoid(8);

    const url = {
      id,
      url: resurl,
      createdAt: new Date(),
    };

    await db.collection("urls").insertOne(url);

    res.status(200).json({ id });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occurred while saving the URL." });
  }
}
