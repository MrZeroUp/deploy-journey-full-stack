// JavaScript Assincrono
// await async
// FullFilled = Promise = Requisicao completa

import { MongoClient } from "mongodb";

const URI = 
  "mongodb+srv://alissondevwork:GqugrRWddFNp3e4H@cluster0.3wox7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
//const songCollection = await db.collection("songs").find({}).toArray();

//console.log(songCollection);
 