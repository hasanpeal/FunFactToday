import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import env from "dotenv";

env.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const app = express();
const port = 3000;

app.use(express.static("public"));

async function getFact() {
  const prompt = "Tell me an interesting fact";
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent([prompt]);
  return result.response.text();
}

app.get("/", async (req, res) => {
  try {
    const fact = await getFact();
    res.render("index.ejs", { fact });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
