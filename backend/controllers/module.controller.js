// controllers/moduleController.js
const Module = require("../models/modules");

class ModuleController {
  async createModule(req, res) {
    try {
      const { sections, sectionsNumber } = req.body;
      const newModule = await Module.create({ sections, sectionsNumber });
      res.status(201).json(newModule);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getAllModules(req, res) {
    try {
      const modules = await Module.find().populate("sections");
      res.status(200).json(modules);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getModuleById(req, res) {
    try {
      const module = await Module.findById(req.params.id).populate("sections");
      if (module) {
        res.status(200).json(module);
      } else {
        res.status(404).json({ message: "Module not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async updateModule(req, res) {
    try {
      const updatedModule = await Module.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      ).populate("sections");
      res.status(200).json(updatedModule);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async deleteModule(req, res) {
    try {
      const deletedModule = await Module.findByIdAndDelete(req.params.id);
      if (deletedModule) {
        res.status(200).json({ message: "Module deleted successfully" });
      } else {
        res.status(404).json({ message: "Module not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new ModuleController();
