import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const PORT = 5000;

//middleware
app.use(cors());

app.use(express.json());

//function keep website alive on render
const url = `https://orion-backend-pqzf.onrender.com/`;
const interval = 840000; // 14 minutes in milliseconds


function operatingHours() { // only work between 8 AM and 11 PM
  const now = new Date();
  const hours = now.getHours();
  return hours >= 8 && hours < 23; // return true if between 8 AM and 11 PM
}

function reloadWebsite() {
  if (operatingHours()) {
    fetch(url)
      .then((response) => {
        console.log("Website reloaded");
      })
      .catch((error) => {
        console.error(`reloadWebsite Error: ${error.message}`);
      });
  }
}
setInterval(reloadWebsite, interval);

// function end

const apiKey = process.env.API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


app.post("/", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt is required" });

  const result = await model.generateContentStream(prompt);
  try {
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      res.write(chunkText);
    }
  } catch (error) {
    console.log("Error generating content: ", error);
    res
      .status(500)
      .json({ error: "An error occurred while generating content" });
  } finally {
    res.end(); // End the response after all chunks are sent
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
