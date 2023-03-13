const Rooms = require("../database/models/Rooms");

const checkRoomUsers = async (room, user) => {
  const roomInfo = await Rooms.findOne({ room }).find({
    allowedUsers: { $in: [user] },
  });

  if (!roomInfo.length) return false;
  return true;
};

const checkRoom = async (room) => {
  const roomInfo = await Rooms.findOne({ room });
  if (!roomInfo) return false;
  return true;
};

const getRoomInfo = async (room) => {
  return await Rooms.findOne({ room });
};

module.exports = {
  checkRoomUsers,
  checkRoom,
  getRoomInfo,
};
