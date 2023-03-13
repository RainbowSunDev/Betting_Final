const { roomUtils } = require("../../utils");
const {
  RES_MSG_NOT_ALLOWED_ROOM,
  RES_STATUS_SUCCESS,
  RES_MSG_NOT_FOUND_ROOM,
} = require("../../constants");
const printLog = require("../../utils/log");

const checkRoomUser = async (req, res, next) => {
  try {
    const { room_number, id } = req.body;
    // const { token } = req.headers;
    // if (typeof token === "undefined")
    //   return res.status(401).json({
    //     message: RES_STATUS_UNAUTHORIZED,
    //   });

    // jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    //   const { roomNumber, id } = decoded;
    if (!(await roomUtils.checkRoom(room_number)))
      return res.status(404).json({
        message: RES_MSG_NOT_FOUND_ROOM,
      });

    if (!(await roomUtils.checkRoomUsers(room_number, id)))
      return res.status(404).json({
        message: RES_MSG_NOT_ALLOWED_ROOM,
      });

    return res.status(200).json({
      currentRoom: await roomUtils.getRoomInfo(room_number),
    });
  } catch (err) {
    printLog(err);
    return res.status(403).json({
      message: RES_MSG_USER_NOT_FOUND,
    });
  }
};

module.exports = {
  checkRoomUser,
};
