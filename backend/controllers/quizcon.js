const Quiz = require('../models/Quiz');

exports.getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.submitQuiz = async (req, res) => {
    const { userId, answers } = req.body;

    try {
        let score = 0;
        const quizzes = await Quiz.find();

        quizzes.forEach((quiz, index) => {
            if (quiz.correctAnswer === answers[index]) {
                score += 1;
            }
        });

        res.json({ message: "Quiz submitted successfully", score });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
