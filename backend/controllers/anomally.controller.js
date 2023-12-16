// controllers/anomalyController.js
const Anomaly = require("../models/anomaly");

class AnomalyController {
  async createAnomaly(req, res) {
    try {
      const { message } = req.body;
      const newAnomaly = await Anomaly.create({
        reportedBy: req.user._id,
        message,
      });
      res.status(201).json(newAnomaly);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getAllAnomalies(req, res) {
    try {
      const anomalies = await Anomaly.find().sort({ createdAt: -1 });
      res.status(200).json(anomalies);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getAnomalyById(req, res) {
    try {
      const anomaly = await Anomaly.findById(req.params.id);
      if (anomaly) {
        res.status(200).json(anomaly);
      } else {
        res.status(404).json({ message: "Anomaly not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async updateAnomaly(req, res) {
    try {
      const updatedAnomaly = await Anomaly.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedAnomaly);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async deleteAnomaly(req, res) {
    try {
      const deletedAnomaly = await Anomaly.findByIdAndDelete(req.params.id);
      if (deletedAnomaly) {
        res.status(200).json({ message: "Anomaly deleted successfully" });
      } else {
        res.status(404).json({ message: "Anomaly not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new AnomalyController();
