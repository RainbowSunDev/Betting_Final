const  Rooms  = require("../database/models/Rooms");
const { findRoomUsers } = require("../utils");
const { printLog } = require("../utils/log");

const socketDisconnect = (io, socket) => async () => {
  try {
    // const room = Object.keys(socket.rooms)[1];
    // // socket.rooms returns an object where key and value are the same
    // // first key is socket id, second key is rooms name
    // const { _id } = socket.decoded;
    // await Rooms.updateOne({ room }, { $pullAll: { users: [_id] } });
    // const usersInfo = await findRoomUsers(room);
    // io.to(room).emit("joinRoom", usersInfo);
  } catch (err) {
    printLog(err);
  }
};

module.exports = socketDisconnect;
