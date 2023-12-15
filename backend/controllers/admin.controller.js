const MyResponse = require("../models/Response");

class AdminController {
  //* manage user
  getUsers = async (req, res, next) => {};

  deleteUsers = async (req, res, next) => {};

  getUser = async (req, res, next) => {};

  updateUser = async (req, res, next) => {};

  deleteUser = async (req, res, next) => {};

  //todo : when user is verified send email to his account you are accepted
  verifyUser = async (req, res, next) => {};
}

module.exports = new AdminController();
