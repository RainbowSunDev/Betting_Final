const { Schema, model, SchemaTypes } = require("mongoose");

const roomSchema = new Schema({
  room: {
    type: String,
    required: true,
    trim: true,
  },
  allowedUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
  lotteryTypes: [
    {
      type: SchemaTypes.ObjectId,
      ref: "LotteryTypes",
    },
  ],
  roomImg: {
    type: String,
    default: "room.png",
    trim: true,
  },
  curUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
});
roomSchema.set("timestamps", true);
const Rooms = model("Rooms", roomSchema);

module.exports = Rooms;
