const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
  sections: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sections" }],
  sectionsNumber: Number,
});

const Module = mongoose.model("Module", moduleSchema);
module.exports = Module;
