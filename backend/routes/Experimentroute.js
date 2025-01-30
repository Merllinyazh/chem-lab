const express = require("express");
const router = express.Router();
const Experiment = require("../models/Experiment");
const { registerUser, loginUser } = require('../controllers/usercon');

// Get all experiments
router.get("/", async (req, res) => {
  try {
    const experiments = await Experiment.find();
    res.json(experiments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific experiment by ID
router.get("/:experimentId", async (req, res) => {
  const { experimentId } = req.params;
  try {
    const experiment = await Experiment.findById(experimentId);
    if (!experiment) return res.status(404).json({ message: "Experiment not found" });
    res.json(experiment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
