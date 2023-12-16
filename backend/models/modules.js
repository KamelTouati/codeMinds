const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
  //teachers
  sections: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sections" }],
  moduleAssignments : String,
  // each module has an assignment to a year school and teachers
  sectionsNumber: Number,
});

const Module = mongoose.model("Module", moduleSchema);
module.exports = Module;
