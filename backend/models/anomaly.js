const mongoose = require("mongoose");

// Define the Anomaly Schema
const anomalySchema = new mongoose.Schema(
  {
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    message: String,
    solvedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Anomaly = mongoose.model("Anomaly", anomalySchema);
module.exports = Anomaly;
