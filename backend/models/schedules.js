const mongoose = require("mongoose");
// Define the Schedule Schema (This might need further definition based on your specific requirements)
const scheduleSchema = new mongoose.Schema({
  // Define the fields for scheduling as needed
  // modules [dropdown , hours]{
    // teachers
  //} 
  // classrooms [dropdown]
  // groups [dropdown]
  
});

const Schedule = mongoose.model("Schedule", scheduleSchema);
module.exports = Schedule;
