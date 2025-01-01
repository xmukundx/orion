 import {GoogleGenerativeAI} from "@google/generative-ai"

  const apiKey = import.meta.env.API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({model: "gemini-2.0-flash-exp"});
  

  async function run(prompt) {
  
  
    const result = await model.generateContentStream(prompt);
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      return process.stdout.write(chunkText);
      // console.log(chunkText); 
    }
  }
  
  export default run;