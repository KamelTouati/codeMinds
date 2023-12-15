// routes/announcementRoutes.js
const express = require("express");
const router = express.Router();
const announcementController = require("../controllers/announcment.controller");

router.post("/", announcementController.createAnnouncement);
router.get("/", announcementController.getAllAnnouncements);
router.get("/:id", announcementController.getAnnouncementById);
router.patch("/:id", announcementController.updateAnnouncement);
router.delete("/:id", announcementController.deleteAnnouncement);

module.exports = router;
