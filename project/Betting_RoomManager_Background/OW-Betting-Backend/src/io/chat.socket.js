const {
  RES_STATUS_SUCCESS,
  RES_MSG_SERVER_ERROR,
  RES_STATUS_SERVER_ERROR,
  USER_SEND_MSG,
  ADMIN_SEND_MSG,
  SUPERADMIN_SEND_MSG,
} = require("../constants");

const {
  SOCKET_CHAT_SENT,
  SOCKET_CHAT_USERS_LIST,
  SOCKET_RECENT_LOTTERY_RESULT,
} = require("./chatConstants");

const Chats = require("../database/models/Chats");
const Users = require("../database/models/Users");
const Rooms = require("../database/models/Rooms");
const LotteryResults = require("../database/models/LotteryResults");
const { printLog } = require("../utils/log");
const {
  SOCKET_CHAT_JOIN_ROOM,
  SOCKET_CHAT_SEND_MESSAGE,
} = require("./chatConstants");

const sendChatMsgToRoom = (io, socket) => ({ userID, roomID, sendTo, msg }) => {
  console.log({
    userID,
    roomID,
    sendTo,
    msg,
  });
  // save the chat history
  console.log("sadfsadfdsafdsafasdfsadfasdfasdfasdfasdf");
  Chats.findOneAndUpdate(
    {
      room: roomID,
      user: userID,
    },
    {
      $push: {
        msg: {
          content_type: "letter",
          sender_type:
            sendTo == USER_SEND_MSG
              ? "user"
              : sendTo == ADMIN_SEND_MSG
              ? "room_admin"
              : "super_admin",
          msg,
        },
      },
    },
    {
      upsert: true,
      useFindAndModify: false,
    }
  )
    .then((chat) => {
      console.log("asdlkfjsadlfkjsdalf;jsdaf");
      io.to(userID + roomID).emit(SOCKET_CHAT_SENT, {
        status: RES_STATUS_SUCCESS,
        sendTo,
        content: msg,
        date: new Date(),
      });
    })
    .catch((err) => {
      console.log(err);
      io.to(userID + roomID).emit(SOCKET_CHAT_SENT, {
        status: RES_STATUS_SERVER_ERROR,
        sendTo,
        content: msg,
        date: new Date(),
      });
    });
};

const getUserList = (io, socket) => ({ roomID }) => {
  try {
    socket.join();
    Rooms.findOne({ _id: roomID })
      .populate("allowedUsers")
      .then((res) => {
        socket.emit(SOCKET_CHAT_USERS_LIST, {
          data: res,
        });
      })
      .catch((err) => {
        printLog(err);
      });
  } catch (err) {
    printLog(err);
  }
};

// Join Chat with Room Manager
const joinChatRoom = (io, socket) => ({ userID, roomID }) => {
  try {
    console.log(userID, roomID);
    socket.join(userID + roomID);

    Chats.findOne({
      room: roomID,
      user: userID,
    })
      .select("msg")
      .then((res) => {
        io.sockets.to(userID + roomID).emit(SOCKET_CHAT_JOIN_ROOM, {
          status: RES_STATUS_SUCCESS,
          data: res,
        });
      })
      .catch((err) => {
        printLog(err);
        io.sockets.to(userID + roomID).emit(SOCKET_CHAT_JOIN_ROOM, {
          status: RES_STATUS_SERVER_ERROR,
        });
      });
  } catch (err) {
    printLog(err);
  }
};

const getRecentLotteryResult = (io, socket) => ({ lotteryType }) => {
  try {
    LotteryResults.find({
      lotteryType,
    })
      .sort("-createdAt")
      .then((res) => {
        // console.log(res)
        let temp = [];
        temp = res;
        if (res.length > 10) temp = temp.slice(res.length - 10, res.length);
        socket.emit(SOCKET_RECENT_LOTTERY_RESULT, {
          status: RES_STATUS_SUCCESS,
          data: temp,
        });
      })
      .catch((err) => {
        printLog(err);
        socket.emit(SOCKET_RECENT_LOTTERY_RESULT, {
          status: RES_STATUS_SERVER_ERROR,
        });
      });
  } catch (err) {
    printLog(err);
  }
};

module.exports = {
  joinChatRoom,
  sendChatMsgToRoom,
  getUserList,
  getRecentLotteryResult,
};
