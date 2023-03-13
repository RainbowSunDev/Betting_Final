const { Schema, model, SchemaTypes } = require("mongoose");

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
    trim: true,
  },
  userNumber: {
    type: Number,
    trim: true,
  },
  nickname: {
    type: String,
    default: "",
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  point: {
    type: Number,
    default: 0,
  },
  role: String,
  avatar: {
    type: String,
    default: "avatar.png",
    trim: true,
  },
  userRole: [
    {
      roomno: {
        type: SchemaTypes.ObjectId,
        ref: "Rooms",
      },
      role: {
        type: Number,
        default: 0, // 0: user, 1: Room manager
      },
    },
  ],
  roomHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Rooms",
    },
  ],
});
userSchema.set("timestamps", true);
const Users = model("Users", userSchema);

module.exports = Users;
