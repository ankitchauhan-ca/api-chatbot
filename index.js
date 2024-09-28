// index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Basic chatbot logic for responses
app.post("/chat", (req, res) => {
  const userMessage = req.body.message.toLowerCase();

  let reply = "";

  if (userMessage.includes("hello")) {
    reply = "Hello! How can I help you today?";
  } else if (userMessage.includes("weather")) {
    reply =
      "I’m sorry, I can’t check the weather yet. But I’m here to assist you with other things!";
  } else if (userMessage.includes("service")) {
    reply =
      "We offer web development, mobile app development, and cloud services!";
  } else {
    reply = "Sorry, I didn’t understand that. Can you please rephrase?";
  }

  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`Chatbot API is running on port ${PORT}`);
});
