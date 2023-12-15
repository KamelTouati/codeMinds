// routes/anomalyRoutes.js
const express = require("express");
const router = express.Router();
const anomalyController = require("../controllers/anomally.controller");

router.post("/", anomalyController.createAnomaly);
router.get("/", anomalyController.getAllAnomalies);
router.get("/:id", anomalyController.getAnomalyById);
router.patch("/:id", anomalyController.updateAnomaly);
router.delete("/:id", anomalyController.deleteAnomaly);

module.exports = router;
