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

const apiKey = process.env.API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

app.post("/", async (req, res) => {
  const { prompt } = req.body;
  // 400: Bad Request, server was unable to process a request due to a client error
  if (!prompt) res.status(400).json({ error: "Prompt is required" });

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  try {
    const result = await model.generateContentStream(prompt);
    for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    
    // res.write() to send chunks of data as they are generated
    res.write(chunkText);
    // console.log(chunkText);
  }} 
  
  
  catch (error) {
    console.log("Error generating content: ", error);
    // 500: server was unable to fulfill a request due to an unexpected condition
    res
    .status(500)
    .json({ error: "An error occurred while generating content" });
  }
  finally{
    res.end(); // End the response after all chunks are sent  
  }
  
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});