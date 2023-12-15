const mongoose = require("mongoose");
const { AnnouncmentType } = require("../utils/enums");

const announcementSchema = new mongoose.Schema({
  announcementType: { type: String, enum: AnnouncmentType },
  message: String,
  dateTime: Date,
});

const Announcement = mongoose.model("Announcement", announcementSchema);
module.exports = Announcement;
