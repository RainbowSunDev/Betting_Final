const BetLogs = require("../database/models/BetLogs");

const LotteryResultstas = require("../database/models/LotteryResultStas");

const { printLog } = require("../utils/log");
const { RES_STATUS_SUCCESS, RES_STATUS_SERVER_ERROR } = require("../constants");

const {
  SOCKET_BET_JOIN_ROOM,
  SOCKET_BET_BET,
  SOCKET_BET_USER_LOG,
  SOCKET_LOTTERY_STATISTICS,
  SOCKET_BET_TABLE_EVENT,
} = require("./chatConstants");
const Users = require("../database/models/Users");

const { MiddleBettingCalc } = require("../controllers/global/calcModule");
var intervalID = -1;
// Join BetRoom with Multiple users in betting room.
const joinBetRoom = (io, socket) => ({ userID, roomID, lotteryType }) => {
  try {
    socket.join(lotteryType + roomID);

    console.log("join_betroom=======================", userID);

    BetLogs.find({
      room: roomID,
      lotteryType: lotteryType,
    })
      .populate("user")
      .populate("lotteryResult")
      .sort("-createdAt")
      .limit(100)
      .then((result) => {
        Users.findOne({ _id: userID }).then((user) => {
          socket.emit(SOCKET_BET_JOIN_ROOM, {
            data: { betlogs: result, userInfo: user },
            status: RES_STATUS_SUCCESS,
            date: new Date(),
          });

          if (intervalID != -1) clearInterval(intervalID);
          intervalID = setInterval(function () {
            {
              BetLogs.find({
                room: roomID,
                lotteryType: lotteryType,
              })
                .populate("user")
                .populate("lotteryResult")
                .sort("-createdAt")
                .limit(100)
                .then((ressss) => {
                  // console.log({ result });

                  var real_result = [];
                  ressss.map((item, key) => {
                    if (
                      item.content_type == "bet_code" ||
                      item.content_type == "messy_code"
                    ) {
                      var totalProfit = 0;
                      item.bettingResult.map((britem, key1) => {
                        totalProfit += britem.profit;
                      });
                      real_result.push({
                        DateTime: item.createdAt,
                        UserId: item.user.nickname,
                        Content: item.content,
                        lotteryResult: item.lotteryResult
                          ? item.lotteryResult.result
                          : "",
                        Profit: totalProfit.toPrecision(2),
                      });
                    }
                  });

                  console.log("result-length====>>", real_result.length);
                  socket.emit(SOCKET_BET_TABLE_EVENT, {
                    data: {
                      betlogs: real_result,
                      lotteryType: lotteryType,
                    },
                    status: RES_STATUS_SUCCESS,
                    date: new Date(),
                  });
                  console.log("SOCKET_BET_TABLE_EVENT");
                });
            }
          }, 2000);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    socket.emit(SOCKET_BET_JOIN_ROOM, {
      status: RES_STATUS_SERVER_ERROR,
      date: new Date(),
    });
    printLog(err);
  }
};

var betTypes = [
  "NUM",
  "NUM",
  "BS",
  "BS",
  "EO",
  "EO",
  "DT",
  "DT",
  "FSN",
  "FSEO",
  "FSBS",
];

function checkingBet(betMsg) {
  let arr_regex = [
    /^\d+\/\d+\/\d+$/,
    /^\d+\/\d+$/,
    /^\d+(大|小)\d+$/,
    /^(大|小)\d+$/,
    /^\d+(单|双)\d+$/,
    /^(单|双)\d+$/,
    /^\d+(龙|虎)\d+$/,
    /^(龙|虎)\d+$/,
    /^(冠亚和)\d+\/\d+$/,
    /^(冠亚和)(单|双)\d+$/,
    /^(冠亚和)(大|小)\d+$/,
    /^(上分|下分)\d+$/,
    /^(梭哈|取消|重复)$/,
  ];

  let result = -1;

  arr_regex.map((regex, key) => {
    if (regex.test(betMsg)) result = key;
  });

  return result;
}

const bet = (io, socket) => async ({
  userInfo,
  roomID,
  lotteryType,
  // betType,
  msg,
}) => {
  console.log({ userInfo, roomID, lotteryType, msg });

  var content_type;
  if (checkingBet(msg) < 11 && checkingBet(msg) >= 0) content_type = "bet_code";
  else if (checkingBet(msg) == -1) content_type = "messy_code";
  else if (checkingBet(msg) == 11 || checkingBet(msg) == 12)
    content_type = "req_code";

  var userone = await Users.findOne({ _id: userInfo._id });
  var updateduserpoint = MiddleBettingCalc(
    msg,
    checkingBet(msg) != -1 && checkingBet(msg) < 11
      ? betTypes[checkingBet(msg)]
      : "none",
    userone.point
  );

  userone.point = updateduserpoint;
  await userone.save();

  // save the chat history
  new BetLogs({
    user: userInfo._id,
    room: roomID,
    lotteryType: lotteryType,
    content: msg,
    betType:
      checkingBet(msg) != -1 && checkingBet(msg) < 11
        ? betTypes[checkingBet(msg)]
        : "none",
    content_type: content_type,
    // betType: betType,
  })
    .save()
    .then((result) => {
      io.to(lotteryType + roomID).emit(SOCKET_BET_BET, {
        data: {
          userInfo: userone,
          msg,
          date: new Date(),
        },
        status: RES_STATUS_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err);
      io.to(lotteryType + roomID).emit(SOCKET_BET_BET, {
        status: RES_STATUS_SERVER_ERROR,
        date: new Date(),
      });
    });
};

const getUserBetLog = (io, socket) => ({
  user,
  room,
  lotteryType,
  pageNum,
}) => {
  BetLogs.find({
    user,
    room,
    lotteryType,
  })
    .skip(10 * (pageNum - 1))
    .limit(10)
    .populate("lotteryResult")
    .sort("-betTime")
    .then((data) => {
      socket.emit(SOCKET_BET_USER_LOG, { data, status: RES_STATUS_SUCCESS });
    })
    .catch((err) => {
      printLog(err);
    });
};

const getLotteryStatistics = (io, socket) => ({ room, lotteryType }) => {
  LotteryResultstas.findOne({
    lotteryType,
  })
    .select("resultStatistics")
    .then((result) => {
      if (result.length != 0) {
        const filterResult = [];
        result = result.resultStatistics;
        result.filter((item, index) => {
          if (item > 2) {
            filterResult.push({
              id: index,
              value: item,
            });
            return;
          }
        });
        io.to(lotteryType + room).emit(SOCKET_LOTTERY_STATISTICS, filterResult);
        // console.info(result);
      }
    })
    .catch((err) => {
      printLog(err);
    });
};

module.exports = {
  joinBetRoom,
  bet,
  getUserBetLog,
  getLotteryStatistics,
};
