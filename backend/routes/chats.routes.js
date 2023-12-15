const express = require("express");
const chatsController = require("../controllers/chats.controller");
const messageController = require("../controllers/messages.controller");
const awaitHandlerFactory = require("../middlewares/awaitHandlerFactory.middleware");
const authentication = require("../middlewares/authentication");

const router = express.Router();

router.get(
  "/",
  authentication.verifyUser,
  awaitHandlerFactory(chatsController.getChats)
);

router.post(
  "/",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(chatsController.createChat)
);

//! messages routes
router.post(
  "/:chatId",
  authentication.verifyUser,
  awaitHandlerFactory(messageController.sendMessage)
);

router.get(
  "/:chatId",
  authentication.verifyUser,
  awaitHandlerFactory(messageController.getAllMessages)
);

module.exports = router;
