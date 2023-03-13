const https = require("https");
const Rooms = require("../database/models/Rooms");
const Chats = require("../database/models/Chats");
const LotteryTypes = require("../database/models/LotteryTypes");
const { findRoomUsers } = require("../utils");
const { printLog } = require("../utils/log");
const { SOCKET_JOIN_ROOM } = require("./chatConstants");
const { GAME_TYPES_URL } = require("../constants");

const getGlobalApiData = (socket, roomID) => {
  // initialize arrGlobalApiData
  var arrGlobalApiLeftTimes = [];
  var arrGlobalApiPreDrawIssues = [];
  var arrGlobalApiPreDrawCodes = [];

  var arrGlobalApiData = [];
  var arrGlobalApiDataRealCnt = 0;

  GAME_TYPES_URL.map((each_api_url, key) => {
    // Sample URL
    const request = https.request(each_api_url, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data = data + chunk.toString();
      });

      response.on("end", () => {
        const body = JSON.parse(data);

        arrGlobalApiData[key] = body.result.data;
        arrGlobalApiLeftTimes[key] =
          new Date(body.result.data.drawTime).getTime() -
          new Date(body.result.data.serverTime).getTime();
        arrGlobalApiPreDrawIssues[key] = body.result.data.preDrawIssue;
        arrGlobalApiPreDrawCodes[key] = body.result.data.preDrawCode;
        arrGlobalApiDataRealCnt++;

        if (arrGlobalApiDataRealCnt == GAME_TYPES_URL.length) {
          LotteryTypes.find()
            .then((result) => {
              var lotteryTypesIDs = result.map((item) => item._id);
              // emit to the join room success
              socket.emit(SOCKET_JOIN_ROOM, {
                lotteryTypesIDs: lotteryTypesIDs,
                roomID,
                leftTimes: arrGlobalApiLeftTimes,
                drawIssues: arrGlobalApiPreDrawIssues,
                preDrawCodes: arrGlobalApiPreDrawCodes,
              }); // send lotteries status
            })
            .catch((err) => {
              printLog(err);
            });
        }
      });
    });

    request.on("error", (error) => {
      printLog("An error1", error);
    });

    request.end();
  });
};

const joinRoom = (io, socket) => async ({ roomID }) => {
  try {
    socket.join(roomID); // join Room

    console.log("join big room");
    getGlobalApiData(socket, roomID);
  } catch (err) {
    printLog(err);
  }
};

module.exports = joinRoom;
