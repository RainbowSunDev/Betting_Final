const db = require("../models");
const Room = db.room;
const Op = db.Sequelize.Op;
const {
  RES_MSG_INVALID_ROOMNUMBER,
  RES_MSG_NOT_FOUND_ROOM,
} = require("../constants");

getRoomList = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.status(200).send({ rooms: rooms });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: RES_MSG_SERVER_ERROR });
  }
};

checkRoom = async (req, res) => {
  if (req.body.room_number.length != 6) {
    return res.status(401).send({ message: RES_MSG_INVALID_ROOMNUMBER });
  }
  try {
    const room = await Room.findAll({
      where: {
        room_number: {
          [Op.like]: req.body.room_number,
        },
      },
    });

    if (room.length == 0) {
      return res.status(404).send({ message: RES_MSG_NOT_FOUND_ROOM });
    }

    return res.status(200).send({});
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: RES_MSG_SERVER_ERROR });
  }
};

module.exports = {
  getRoomList,
  checkRoom,
};
