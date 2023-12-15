const mongoose = require("mongoose");

// Define the Message Schema
const messageSchema = new mongoose.Schema({
  content: String,
  SenderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  chatroomId: { type: mongoose.Schema.Types.ObjectId, ref: "ChatRoom" },
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
