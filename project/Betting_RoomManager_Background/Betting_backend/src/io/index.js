const {
  bet,
  joinBetRoom,
  getUserBetLog,
  getLotteryStatistics,
} = require("./bet.socket");
const {
  joinChatRoom,
  sendChatMsgToRoom,
  getUserList,
  getRecentLotteryResult,
} = require("./chat.socket");

const joinRoom = require("./joinRoom");

const {
  SOCKET_JOIN_ROOM,
  SOCKET_CHAT_GET_DATA,
  SOCKET_BET_JOIN_ROOM,
  SOCKET_BET_GET_DATA,
  SOCKET_BET_BET,
  SOCKET_CHAT_JOIN_ROOM,
  SOCKET_CHAT_SEND_MESSAGE,
  SOCKET_BET_USER_LOG,
  SOCKET_LOTTERY_STATISTICS,
  SOCKET_CHAT_USERS_LIST,
  SOCKET_RECENT_LOTTERY_RESULT,
} = require("./chatConstants");
const socketDisconnect = require("./disconnect");

const ioHandler = (io) => (socket) => {
  // join
  socket.on(SOCKET_JOIN_ROOM, joinRoom(io, socket));

  // start chat socket with Room manager
  socket.on(SOCKET_CHAT_JOIN_ROOM, joinChatRoom(io, socket));

  socket.on(SOCKET_CHAT_SEND_MESSAGE, sendChatMsgToRoom(io, socket));

  
  // start bet socket
  socket.on(SOCKET_BET_JOIN_ROOM, joinBetRoom(io, socket));

  socket.on(SOCKET_BET_BET, bet(io, socket));

  socket.on("disconnect", socketDisconnect(io));
  // return bet log for user
  // input: userID, roomID, lotteryID, pageNum
  socket.on(SOCKET_BET_USER_LOG, getUserBetLog(io, socket));
  //return the lottery statistics
  // input: roomID, lotteryID
  socket.on(SOCKET_LOTTERY_STATISTICS, getLotteryStatistics(io, socket));

  socket.on(SOCKET_CHAT_USERS_LIST, getUserList(io, socket));

  // return the recent lottery result
  socket.on(SOCKET_RECENT_LOTTERY_RESULT, getRecentLotteryResult(io, socket));

};

module.exports = ioHandler;
