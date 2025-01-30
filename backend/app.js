const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Merllinclg62';

const userRoutes = require("./routes/userroutes");
const experimentRoutes = require("./routes/Experimentroute");
const quizRoutes = require("./routes/quizroutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose
  .connect("mongodb+srv://ADMIN:yazh232005@cluster0.erqqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Database connection failed:", error.message));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/experiments", experimentRoutes);
app.use("/api/quizzes", quizRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = { JWT_SECRET };
