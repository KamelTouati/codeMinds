const mongoose = require("mongoose");
// Define the ChatRoom Schema
const chatRoomSchema = new mongoose.Schema({
  teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  responsable: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  // messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
});

const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);
module.exports = ChatRoom;
