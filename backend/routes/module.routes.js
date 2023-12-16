// routes/moduleRoutes.js
const express = require("express");
const router = express.Router();
const moduleController = require("../controllers/module.controller");

router.post("/", moduleController.createModule);
router.get("/", moduleController.getAllModules);
router.get("/:id", moduleController.getModuleById);
router.patch("/:id", moduleController.updateModule);
router.delete("/:id", moduleController.deleteModule);

module.exports = router;
