// controllers/assignmentController.js
const Assignment = require("../models/assignments");

class AssignmentController {
  async createAssignment(req, res) {
    try {
      const { question, dateTime } = req.body;
      const newAssignment = await Assignment.create({ question, dateTime });
      res.status(201).json(newAssignment);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getAllAssignments(req, res) {
    try {
      const assignments = await Assignment.find().populate("submissions");
      res.status(200).json(assignments);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getAssignmentById(req, res) {
    try {
      const assignment = await Assignment.findById(req.params.id).populate(
        "submissions"
      );
      if (assignment) {
        res.status(200).json(assignment);
      } else {
        res.status(404).json({ message: "Assignment not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async updateAssignment(req, res) {
    try {
      const updatedAssignment = await Assignment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      ).populate("submissions");
      res.status(200).json(updatedAssignment);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async deleteAssignment(req, res) {
    try {
      const deletedAssignment = await Assignment.findByIdAndDelete(
        req.params.id
      );
      if (deletedAssignment) {
        res.status(200).json({ message: "Assignment deleted successfully" });
      } else {
        res.status(404).json({ message: "Assignment not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new AssignmentController();
