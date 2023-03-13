const { Schema, model, SchemaTypes } = require("mongoose");

const chatSchema = new Schema({
  room: {
    type: SchemaTypes.ObjectId,
    ref: "rooms",
  },
  user: {
    type: SchemaTypes.ObjectId,
    ref: "users",
  },
  msg: [
    {
      content_type: {
        type: String,
        enum: ["letter", "file"],
      },
      sender_type: {
        type: String,
        enum: ["user", "room_admin", "super_admin"],
      }, // true: user, false admin
      msg: String,
    },
  ],
  date: {
    type: Date,
    default: new Date(),
  },
});
chatSchema.set("timestamps", true);
const Chats = model("chats", chatSchema);

module.exports = Chats;
