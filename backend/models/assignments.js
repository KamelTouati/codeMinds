const mongoose = require("mongoose");

// Define the Assignment Schema
const assignmentSchema = new mongoose.Schema({
  question: String,
  dateTime: Date,
  submissions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Submission" }],
});

const Assignment = mongoose.model("Assignment", assignmentSchema);
module.exports = Assignment;
