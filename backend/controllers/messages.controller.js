const ChatRoom = require("../models/chatRoom");
const Message = require("../models/messages");

class MessagesController {
  sendMessage = async (req, res, next) => {
    try {
      const { content, senderId, chatRoomId } = req.body;

      // Validate the presence of required fields
      if (!content || !senderId || !chatRoomId) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Create a new message
      const message = new Message({
        content,
        sender: senderId,
        chatRoom: chatRoomId,
      });

      // Save the message to the database
      await message.save();

      res.status(201).json({ message });
    } catch (error) {
      next(error);
    }
  };
  getAllMessages = async (req, res, next) => {
    try {
      const { chatRoomId } = req.params;

      // Fetch all messages for the specified chat room
      const messages = await Message.find({ chatRoom: chatRoomId }).populate(
        "senderId"
      );

      res.status(200).json({ messages });
    } catch (error) {
      next(error);
    }
  };
  deleteAllMessages = async (req, res, next) => {
    try {
      const { chatRoomId } = req.params;

      // Delete all messages for the specified chat room
      await ChatRoom.deleteById(chatRoomId);

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
  deleteMessage = async (req, res, next) => {
    try {
      const { messageId } = req.params;

      // Delete the specified message
      await Message.findByIdAndDelete(messageId);

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new MessagesController();
