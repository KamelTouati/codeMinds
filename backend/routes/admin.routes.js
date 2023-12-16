var express = require("express");
var router = express.Router();
const adminController = require("../controllers/admin.controller");
const awaitHandlerFactory = require("../middlewares/awaitHandlerFactory.middleware");
const authentication = require("../middlewares/authentication");

router.get(
  "/users",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(adminController.getUsers)
);

router.post(
  "/users/student",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(adminController.addStudent)
);

router.post(
  "/users/teacher",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(adminController.addTeacher)
);

router.post(
  "/users/maintainance",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(adminController.addMaintainance)
);

router.post(
  "/users/admin",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(adminController.addAdmin)
);

router.delete(
  "/users",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(adminController.deleteAllUsers)
);

module.exports = router;
