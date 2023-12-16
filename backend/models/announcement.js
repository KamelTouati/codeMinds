const mongoose = require("mongoose");
const { AnnouncmentType } = require("../utils/enums");

const announcementSchema = new mongoose.Schema(
  {
    announcementType: {
      type: String,
      enum: [
        AnnouncmentType.ALL,
        AnnouncmentType.STUDENTS,
        AnnouncmentType.TEACHERS,
        AnnouncmentType.MAINTENANCE,
      ],
    },
    announcedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    message: String,
  },
  { timestamps: true }
);

const Announcement = mongoose.model("Announcement", announcementSchema);
module.exports = Announcement;
