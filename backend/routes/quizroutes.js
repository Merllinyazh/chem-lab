const express = require("express");
const router = express.Router();

// Sample quiz data
const quizQuestions = [
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2"],
    correctAnswer: "H2O"
  },
  {
    question: "What is the atomic number of carbon?",
    options: ["6", "12", "14"],
    correctAnswer: "6"
  }
];

// Get quiz questions
router.get("/", (req, res) => {
  res.json(quizQuestions);
});

// Submit quiz answers
router.post("/submit", (req, res) => {
  const { answers } = req.body;
  let score = 0;

  answers.forEach((answer, index) => {
    if (answer === quizQuestions[index].correctAnswer) {
      score++;
    }
  });

  res.json({ score, total: quizQuestions.length });
});

module.exports = router;
