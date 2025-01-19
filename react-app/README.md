Project Overview 
In recent years, AI chatbots have gained immense popularity. However, with the increasing reliance on digital tools, concerns about user privacy have also escalated. To tackle this, I developed a privacy-focused AI chatbot that leverages the Gemini API. This chatbot stands out by not storing any user data and allowing users to interact without the need for login credentials.


Tech Stack:
Frontend: React for building the user interface.
Styling: Tailwind CSS for responsive and modern design.
Backend: Express.js for handling server-side logic.
AI Integration: Gemini API (1.5 Flash model).

Key Features:
No Data Storage: The chatbot processes user queries in real-time without saving any data, ensuring complete privacy.
Anonymous Usage: Users can engage with the chatbot without creating an account or logging in, making it accessible to everyone.
Real-Time Responses: The chatbot delivers instant feedback, creating a seamless user experience.

Environment Setup:
For my React project, I chose Vite as my build tool, leveraging its exceptional features such as lightning-fast development server startup,
To power my backend, I set up a Node.js environment and utilized Express.js for seamless interactions with my frontend application..

Integrating the Gemini AI:
I implemented the Gemini AI API into my app, which enables text generation based on user input. Its real-time streaming responses feature allows for seamless and interactive conversations. To integrate the API, I referred to the official documentation, which provided clear guidance and code examples in Node.js:https://ai.google.dev/gemini-api/docs/text-generation?lang=node


Data Handling:
For handling the data, I created a single POST route that destructs the prompt from the request body. This prompt is sent to the Gemini generate content function, which returns chunks of streaming text. I use a for...of loop to send these chunks continuously to the response body. 


Technical Challenges:
I faced three main challenges while developing this project: managing streaming data, displaying HTML content, and deploying the backend server.

Initially, I struggled with handling responses in the backend. I considered waiting for the entire response to complete before sending it to the frontend, but this would slow down the user experience. After researching, I learned about streaming data handling, which allowed me to send real-time updates without delays.

Once the backend was functional, I needed to display the response on the frontend. The content was unorganized and poorly formatted. To address this, I explored Markdown and used libraries like Unified and React-Hype to properly format the text.

When the project was ready, I hosted the frontend on Vercel and the backend on Render, which supports Express.js. A major challenge with Render's free tier is that the server goes idle after 15 minutes of inactivity, causing delays when users make requests. To solve this, I modified my server code to send a request every 14 minutes, keeping the server alive during operating hours (8 AM to 11 PM) to balance server performance and resource usage. This approach prevents idle time and ensures a smoother user experience.

User Feedback:
I received great feedback from users about the website's overall look and feel. They appreciated the smooth experience and noted that it loads quickly. I also addressed the flaws mentioned by users and made updates to improve the application.
