var express = require("express");
var router = express.Router();
//* handle managing of users (update delete bloc ...)
const adminController = require("../controllers/admin.controller");
const { not_supported_operation } = require("../controllers/common_responses");
const awaitHandlerFactory = require("../middlewares/awaitHandlerFactory.middleware");
const authentication = require("../middlewares/authentication");

//! /admin/users
//* we can use this end point to search user we use the query search=<val>
router.get(
  "/users",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(adminController.getUsers)
);
//todo: add new user diff is he will be accepted auto
router.post(
  "/users",
  authentication.verifyUser,
  authentication.verifyAdmin,
  not_supported_operation
);
router.delete(
  "/users",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(adminController.deleteUsers)
);

//! users
router.get(
  "/users/:userId",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(adminController.getUser)
);
//todo update user
router.post(
  "/users/:userId",
  authentication.verifyUser,
  authentication.verifyAdmin,
  not_supported_operation
);
//todo: verify user account {accept him or refuse his access to the app}
router.put(
  "/users/:userId",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(adminController.verifyUser)
);
router.put(
  "/users/:userId",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(adminController.updateUser)
);
router.delete(
  "/users/:userId",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(adminController.deleteUser)
);

module.exports = router;
