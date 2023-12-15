var express = require("express");
var router = express.Router();
const authController = require("../controllers/auth.controller");
const awaitHandlerFactory = require("../middlewares/awaitHandlerFactory.middleware");
const authentication = require("../middlewares/authentication");

router.post("/register", awaitHandlerFactory(authController.register));

router.post("/login", awaitHandlerFactory(authController.login));

router.post(
  "/logout",
  authentication.verifyUser,
  awaitHandlerFactory(authController.logout)
);

//*profile
router.get(
  "/profile",
  authentication.verifyUser,
  awaitHandlerFactory(authController.getProfile)
);

module.exports = router;
