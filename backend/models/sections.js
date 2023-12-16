const mongoose = require("mongoose");
// Define the Sections Schema
const sectionSchema = new mongoose.Schema({
  content: String,
  courseFile: String,
  assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Assignment" }],
});

const Sections = mongoose.model("Section", sectionSchema);

module.exports = Sections;
