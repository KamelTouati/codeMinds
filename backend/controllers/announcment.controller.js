// controllers/announcementController.js
const Announcement = require("../models/announcement");

class AnnouncementController {
  async createAnnouncement(req, res) {
    try {
      const { announcementType, announcedby, title, message, dateTime } =
        req.body;
      const newAnnouncement = await Announcement.create({
        announcementType,
        announcedby,
        title,
        message,
        dateTime,
      });
      res.status(201).json(newAnnouncement);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getAllAnnouncements(req, res) {
    try {
      const announcements = await Announcement.find();
      res.status(200).json(announcements);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getAnnouncementById(req, res) {
    try {
      const announcement = await Announcement.findById(req.params.id);
      if (announcement) {
        res.status(200).json(announcement);
      } else {
        res.status(404).json({ message: "Announcement not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async updateAnnouncement(req, res) {
    try {
      const updatedAnnouncement = await Announcement.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedAnnouncement);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async deleteAnnouncement(req, res) {
    try {
      const deletedAnnouncement = await Announcement.findByIdAndDelete(
        req.params.id
      );
      if (deletedAnnouncement) {
        res.status(200).json({ message: "Announcement deleted successfully" });
      } else {
        res.status(404).json({ message: "Announcement not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new AnnouncementController();
