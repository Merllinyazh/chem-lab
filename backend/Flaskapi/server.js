require("dotenv").config();
const express = require("express");
const cors = require("cors");

const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

// API Route to communicate with Flask
app.post("/generate_questions", async (req, res) => {
    try {
        const response = await axios.post("http://127.0.0.1:5000/generate_questions", req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch questions from Flask API" });
    }
});

app.listen(4000, () => {
    console.log("MERN backend running on port 4000");
});

const bodyParser = require("body-parser");


const app = express();
const PORT = 5000;
// Replace with your actual Hugging Face API key

app.use(cors());
app.use(bodyParser.json());

// Predefined paragraph
const paragraph =
  "The process of photosynthesis allows plants to convert sunlight into energy, producing oxygen as a byproduct. This process occurs in the chloroplasts, using chlorophyll to absorb light energy.";

// Function to generate 10 questions dynamically
async function generateQuestions() {
  try {
    const input = `generate question: ${paragraph}`;
    let questionBank = [];

    for (let i = 0; i < 10; i++) {
      const response = await hf.textGeneration({
        model: "ramsrigouthamg/t5_squad_v1",
        inputs: input,
      });

      if (response?.generated_text) {
        questionBank.push(response.generated_text);
      }
    }

    return questionBank;
  } catch (error) {
    console.error("Error generating questions:", error);
    return [];
  }
}

// Endpoint to generate and return questions
app.post("/generate-questions", async (req, res) => {
  const questions = await generateQuestions();

  if (questions.length === 0) {
    return res.status(500).json({ error: "Failed to generate questions." });
  }

  res.json({ paragraph, questions });
});

// Predefined correct answers for validation
const correctAnswers = [
  "Photosynthesis occurs in the chloroplasts.",
  "Oxygen is a byproduct of photosynthesis.",
  "Chlorophyll absorbs sunlight.",
  "Plants use sunlight to make energy.",
  "Photosynthesis produces oxygen.",
  "Chloroplasts help in energy conversion.",
  "Sunlight is necessary for photosynthesis.",
  "Plants convert light into chemical energy.",
  "Oxygen is released during photosynthesis.",
  "Chloroplasts contain chlorophyll.",
];

// Endpoint to check submitted answers
app.post("/submit-answers", (req, res) => {
  try {
    const { answers } = req.body;

    if (!Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({ error: "Invalid answers format." });
    }

    const results = answers.map((answer, index) => ({
      question: `Q${index + 1}`,
      userAnswer: answer,
      correctAnswer: correctAnswers[index] || "Not available",
      isCorrect:
        answer.toLowerCase().trim() === (correctAnswers[index] || "").toLowerCase().trim(),
    }));

    res.json({ results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error checking answers." });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

