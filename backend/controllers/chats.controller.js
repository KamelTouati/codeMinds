const ChatRoom = require("../models/chatRoom");
class ChatsController {
  createChat = async (req, res, next) => {
    try {
      const { teachers, responsable } = req.body;

      // Validate the presence of required fields
      if (!teachers || !responsable) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Create a new chat room
      const chatRoom = new ChatRoom({
        teachers,
        responsable,
      });

      // Save the chat room to the database
      await chatRoom.save();

      res.status(201).json(chatRoom);
    } catch (error) {
      next(error);
    }
  };

  deleteChat = async (req, res, next) => {
    try {
      const { chatRoomId } = req.params;

      await ChatRoom.findByIdAndDelete(chatRoomId);

      res.status(204).json("Chat Deleted");
    } catch (error) {
      next(error);
    }
  };

  getChats = async (req, res, next) => {
    try {
      const teacherId = req.user._id;

      const chatRooms = await ChatRoom.find({
        teachers: { $in: [teacherId] },
      }).sort({ updatedAt: -1 });

      res.status(200).json(chatRooms);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new ChatsController();
