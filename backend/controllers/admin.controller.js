const { UserRole } = require("../utils/enums");
const User = require("../models/users"); // Assuming you have a User model

class AdminController {
  async getUsers(req, res, next) {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async addStudent(req, res, next) {
    try {
      const { firstName, lastName, email, password, profileImage } = req.body;
      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        profileImage,
        role: UserRole.STUDENT, // Assuming 'STUDENT' is the role for students
      });
      await newUser.save();
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async addTeacher(req, res, next) {
    try {
      const { firstName, lastName, email, password, profileImage } = req.body;
      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        profileImage,
        role: UserRole.TEACHER, // Assuming 'TEACHER' is the role for teachers
      });
      await newUser.save();
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async addAdmin(req, res, next) {
    try {
      const { firstName, lastName, email, password, profileImage } = req.body;
      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        profileImage,
        role: UserRole.ADMINISTRATION, // Assuming 'ADMIN' is the role for administrators
      });
      await newUser.save();
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async addMaintainance(req, res, next) {
    try {
      const { firstName, lastName, email, password, profileImage } = req.body;
      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        profileImage,
        role: UserRole.MAINTENANCE, // Assuming 'ADMIN' is the role for administrators
      });
      await newUser.save();
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async deleteAllUsers(req, res, next) {
    try {
      await User.deleteMany({});
      return res.status(200).json({ message: "Users deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new AdminController();
