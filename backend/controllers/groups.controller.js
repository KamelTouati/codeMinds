const Group = require("../models/group");

class GroupController {
  async create(req, res) {
    try {
      const { members } = req.body;
      const newGroup = await Group.create({ members });
      res.status(201).json(newGroup);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const groups = await Group.find();
      res.status(200).json(groups);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getById(req, res) {
    try {
      const group = await Group.findById(req.params.id);
      if (group) {
        res.status(200).json(group);
      } else {
        res.status(404).json({ message: "Group not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async updateById(req, res) {
    try {
      const updatedGroup = await Group.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedGroup);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async deleteById(req, res) {
    try {
      const deletedGroup = await Group.findByIdAndDelete(req.params.id);
      if (deletedGroup) {
        res.status(200).json({ message: "Group deleted successfully" });
      } else {
        res.status(404).json({ message: "Group not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new GroupController();
