import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://bonbon:dxpGhJY5BRj8jUEG@cluster0.wzcmf.mongodb.net/meetups?retryWrites=true&w=majority"
      );
    } catch (error) {
      console.log(error);
    }
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    //console.log(result);
    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
