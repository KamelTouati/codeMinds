const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  studentId: String,
  fileContent: String,
  dateTime: Date,
});

const Submission = mongoose.model("Submission", submissionSchema);
