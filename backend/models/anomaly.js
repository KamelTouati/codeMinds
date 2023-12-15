// Define the Anomaly Schema
const anomalySchema = new mongoose.Schema({
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  message: String,
  dateTime: Date,
  solvedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Anomaly = mongoose.model("Anomaly", anomalySchema);
module.exports = Anomaly;
