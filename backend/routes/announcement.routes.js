// routes/announcementRoutes.js
const express = require("express");
const announcementController = require("../controllers/announcment.controller");
const authentication = require("../middlewares/authentication");
const awaitHandlerFactory = require("../middlewares/awaitHandlerFactory.middleware");

const router = express.Router();

router.post(
  "/",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(announcementController.createAnnouncement)
);
router.get(
  "/",
  authentication.verifyUser,
  awaitHandlerFactory(announcementController.getAllAnnouncements)
);
router.get(
  "/:id",
  authentication.verifyUser,
  awaitHandlerFactory(announcementController.getAnnouncementById)
);
router.delete(
  "/:id",
  authentication.verifyUser,
  awaitHandlerFactory(announcementController.deleteAnnouncement)
);

module.exports = router;
