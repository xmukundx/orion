import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import cron from "node-cron"; // For scheduling tasks

dotenv.config();

const app = express();
const PORT = 5000;

//middleware
app.use(cors());

app.use(express.json());

// Function to check operating hours (8 AM to 11 PM)
function operatingHours() {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 8 && hours < 23; // Return true if between 8 AM and 11 PM
}

// Function to ping the server
async function pingServer() {
  const url = `https://orion-backend-pqzf.onrender.com/health`;
  if (operatingHours()) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        console.log("Server pinged successfully at:", new Date().toISOString());
      } else {
        console.error(`Failed to ping server: ${response.statusText}`);
      }
    } catch (error) {
      console.error(`pingServer Error: ${error.message}`);
    }
  } else {
    console.log("Outside operating hours, skipping ping at:", new Date().toISOString());
  }
}

// Schedule the cron job to run every 13 minutes
cron.schedule("*/13 * * * *", () => {
  console.log("Running cron job to ping server...");
  pingServer();
});




//function to check website alive on render
app.get("/health", (req, res) => {
  res.status(200).send("Server is alive");
});
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
