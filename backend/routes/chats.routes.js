const express = require("express");
const chatsController = require("../controllers/chats.controller");
const awaitHandlerFactory = require("../middlewares/awaitHandlerFactory.middleware");
const authentication = require("../middlewares/authentication");

//post  accessChat
//get fetchChats
//post  createGroupChat
//put renameGroup
//put removeFromGroup
//put addToGroup

const router = express.Router();

router.get(
  "/",
  authentication.verifyUser,
  awaitHandlerFactory(chatsController.getChats)
);

//* delete all chats
router.delete(
  "/",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(chatsController.deleteChats)
);

//* if chat exist we return it
//* else we create a new chat
router.post(
  "/access",
  authentication.verifyUser,
  awaitHandlerFactory(chatsController.accessChat)
);

router.delete(
  "/delete",
  authentication.verifyUser,
  // authentication.verifyAdmin,
  awaitHandlerFactory(chatsController.deleteChat)
);

module.exports = router;
