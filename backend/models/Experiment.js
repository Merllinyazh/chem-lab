const mongoose = require("mongoose");

const ExperimentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  videoUrl: { type: String },
  instructions: { type: String }
});

module.exports = mongoose.model("Experiment", ExperimentSchema);
