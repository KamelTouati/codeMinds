const express = require("express");
const router = express.Router();
const authentication = require("../middlewares/authentication");
const awaitHandlerFactory = require("../middlewares/awaitHandlerFactory.middleware");
const groupsController = require("../controllers/groups.controller");

// CREATE - Create a new group
router.post(
  "/groups",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(groupsController.create)
);

// READ - Get all groups
router.get(
  "/groups",
  authentication.verifyUser,
  awaitHandlerFactory(groupsController.getAll)
);

// READ - Get a specific group by ID
router.get(
  "/groups/:id",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(groupsController.getById)
);

// UPDATE - Update a group by ID
router.patch(
  "/groups/:id",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(groupsController.updateById)
);

// DELETE - Delete a group by ID
router.delete(
  "/groups/:id",
  authentication.verifyUser,
  authentication.verifyAdmin,
  awaitHandlerFactory(groupsController.deleteById)
);

module.exports = router;
