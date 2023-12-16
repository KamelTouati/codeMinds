// controllers/announcementController.js
const Announcement = require("../models/announcement");

class AnnouncementController {
  async createAnnouncement(req, res) {
    const { announcementType, title, message } = req.body;
    const newAnnouncement = await Announcement.create({
      announcementType,
      announcedby: req.user._id,
      title,
      message,
    });
    return res.status(201).json(newAnnouncement);
  }

  async getAllAnnouncements(req, res) {
    const announcements = await Announcement.find({})
      .sort({ createdAt: -1 })
      .populate("announcedby");
    return res.status(200).json(announcements);
  }

  async getAnnouncementById(req, res) {
    const announcement = await Announcement.findById(req.params.id);
    if (announcement) {
      return res.status(200).json(announcement);
    } else {
      return res.status(404).json({ message: "Announcement not found" });
    }
  }

  async updateAnnouncement(req, res) {
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedAnnouncement);
  }

  async deleteAnnouncement(req, res) {
    const deletedAnnouncement = await Announcement.findByIdAndDelete(
      req.params.id
    );
    if (deletedAnnouncement) {
      res.status(200).json({ message: "Announcement deleted successfully" });
    } else {
      res.status(404).json({ message: "Announcement not found" });
    }
  }
}

module.exports = new AnnouncementController();
