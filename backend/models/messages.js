const mongoose = require("mongoose");

// Define the Message Schema
const messageSchema = new mongoose.Schema(
  {
    content: String,
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    chatroom: { type: mongoose.Schema.Types.ObjectId, ref: "ChatRoom" },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
