import express from "express";
import GoogleGenerativeAI from "@google/generative-ai";
import env from "dotenv";

const genAI = new GoogleGenerativeAI(API_KEY);
const res = "";

app.use(express.static("public"));


async function run() {
  const prompt = "Tell me a interested fact";
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  res = await model.generateContent([
    prompt 
  ]);

  console.log(result.response.text());
}

run();

app.get("/", (req, res) => {
    res.render("index.ejs", {fact: res});
});


