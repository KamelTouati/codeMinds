// routes/assignmentRoutes.js
const express = require("express");
const router = express.Router();
const assignmentController = require("../controllers/assignment.controller");

router.post("/", assignmentController.createAssignment);
router.get("/", assignmentController.getAllAssignments);
router.get("/:id", assignmentController.getAssignmentById);
router.patch("/:id", assignmentController.updateAssignment);
router.delete("/:id", assignmentController.deleteAssignment);

module.exports = router;
