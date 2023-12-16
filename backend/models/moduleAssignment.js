const mongoose = require("mongoose");

const moduleAssignmentSchema = new mongoose.Schema({
  //teachers
  sections: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sections" }],
  moduleAssignments : String,
  // each module has an assignment to a year school and teachers
  // an array of  relations between a teacher and a module with the year (exp 2022 / 2023) (id=(teacher,module,year))
  // each module can have multiple teachers and with different teachers depending on the year 
  sectionsNumber: Number,
});

const ModuleAssignments = mongoose.model("ModuleAssignments", moduleAssignmentSchema);
module.exports = ModuleAssignments;
