const Experiment = require('../models/Experiment');

exports.getAllExperiments = async (req, res) => {
    try {
        const experiments = await Experiment.find();
        res.json(experiments);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.getExperimentById = async (req, res) => {
    try {
        const experiment = await Experiment.findById(req.params.id);
        if (!experiment) return res.status(404).json({ message: "Experiment not found" });
        res.json(experiment);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.addExperiment = async (req, res) => {
    const { title, description, videoUrl } = req.body;

    try {
        const newExperiment = new Experiment({ title, description, videoUrl });
        await newExperiment.save();
        res.status(201).json({ message: "Experiment added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
