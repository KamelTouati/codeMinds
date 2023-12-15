const express = require("express");
const awaitHandlerFactory = require("../middlewares/awaitHandlerFactory.middleware");
const MessageController = require("../controllers/messages.controller");
const authentification = require("../middlewares/authentication");

const router = express.Router();

//todo : we can add here paginations techniqs
router.post(
  "/:chatId",
  authentification.verifyUser,
  awaitHandlerFactory(MessageController.sendMessage)
);
router.get(
  "/:chatId",
  authentification.verifyUser,
  awaitHandlerFactory(MessageController.getAllMessages)
);
router.delete(
  "/:chatId",
  authentification.verifyUser,
  awaitHandlerFactory(MessageController.deleteAllMessages)
);

router.delete(
  "/:chatId/:messageId",
  authentification.verifyUser,
  awaitHandlerFactory(MessageController.deleteMessage)
);

module.exports = router;
