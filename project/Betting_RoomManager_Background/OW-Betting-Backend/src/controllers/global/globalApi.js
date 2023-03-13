const https = require("https");
const LotteryResult = require("../../database/models/LotteryResults");
const LotteryTypes = require("../../database/models/LotteryTypes");
const BetLogs = require("../../database/models/BetLogs");
const Rooms = require("../../database/models/Rooms");
const { printLog } = require("../../utils/log");
const { LastBettingCalc } = require("./calcModule");
const io = require("../../socket");
const LotteryResultStas = require("../../database/models/LotteryResultStas");
const {
  SOCKET_BET_BLOCKING_EVENT,
  SOCKET_BET_DRWAING_EVENT,
  SOCKET_BET_WARNING_EVENT,
  SOCKET_BET_NEWTURN_EVENT,
  SOCKET_BET_NEWTURN_EVENT1,
  SOCKET_BET_DRWAING_EVENT1,
  SOCKET_BET_WARNING_EVENT1,
  SOCKET_BET_BLOCKING_EVENT1,
} = require("../../io/chatConstants");
const { bet } = require("../../io/bet.socket");
const Users = require("../../database/models/Users");

const WARNING_TIME = 15000;
const BLOCKING_TIME = 5000;

var lotteryTypesObjIDs = [];
var lotteryTypesApiUrls = [];

var arrGlobalApiData = [];
var deltaTime = 0;
var arrGlobalApiDataRealCnt = 0;

/**
 * Get Draw Issue Information from the Global Apis
 */
const getGlobalApiData = async () => {
  // initialize arrGlobalApiData
  arrGlobalApiData = [];

  lotteryTypesApiUrls.map(async (each_api_url, key) => {
    // Sample URL
    const request = https.request(each_api_url, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data = data + chunk.toString();
      });

      response.on("end", () => {
        const body = JSON.parse(data);
        arrGlobalApiData[key] = body.result.data;
        arrGlobalApiDataRealCnt++;

        if (arrGlobalApiDataRealCnt == 1) {
          // calculate the delta time between the server and local server time
          deltaTime =
            new Date(body.result.data.serverTime).getTime() -
            new Date().getTime();
        }

        //Save data to the db
        saveLotteryResult(body.result.data, key);

        if (arrGlobalApiDataRealCnt == lotteryTypesApiUrls.length) {
          intervalID = setInterval(intervalFunc, 1000);
        }
      });
    });

    request.on("error", (error) => {
      printLog("An error2", error);
    });

    request.end();
  });
};

/**
 * Get Draw Issue Information from the Global Apis
 */
const getGlobalApiLeftTimesData = async (
  roomID,
  preDrawIssue,
  preDrawCode,
  lotteryTypeID,
  users
) => {
  // initialize arrGlobalApiData
  var arrGlobalApiLeftTimes = [];
  var temp = 0;
  lotteryTypesApiUrls.map(async (each_api_url, key) => {
    // Sample URL
    const request = https.request(each_api_url, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data = data + chunk.toString();
      });

      response.on("end", () => {
        const body = JSON.parse(data);

        arrGlobalApiLeftTimes[key] =
          new Date(body.result.data.drawTime).getTime() -
          new Date(body.result.data.serverTime).getTime();
        temp++;

        if (temp == lotteryTypesApiUrls.length) {
          console.log("new turn event - LeftTimes: ", arrGlobalApiLeftTimes);
          io.getIo()
            .to(roomID + "")
            .emit(SOCKET_BET_NEWTURN_EVENT, {
              drawIssue: preDrawIssue,
              result: preDrawCode,
              leftTimes: arrGlobalApiLeftTimes,
              lotteryType: lotteryTypeID,
              // userpoint: userpoint,
            });
        }
      });
    });

    request.on("error", (error) => {
      printLog("An error6", error);
    });

    request.end();
  });
};

const insertBotCodeAndupdateBettingResult = (
  newLotteryResultRow,
  lotteryTypeIndex,
  data
) => {
  // INSERT BOT CODE
  console.log("insert bot code =======>", lotteryTypeIndex);
  Rooms.find().then((result) => {
    result.map((item, key) => {
      BetLogs.find({
        room: item._id,
        lotteryType: lotteryTypesObjIDs[lotteryTypeIndex],
        content_type: "bot_code",
      }).then((res) => {
        if (res.length == 0) {
          new BetLogs({
            content_type: "bot_code",
            room: item._id,
            lotteryType: lotteryTypesObjIDs[lotteryTypeIndex],
          }).save();
        }
      });
    });
  });

  // update the betting values with the betting result.
  BetLogs.find({
    lotteryType: lotteryTypesObjIDs[lotteryTypeIndex],
    content_type: "bet_code",
    isfinished: false,
  })
    .populate("user")
    .populate("lotteryResult")
    .then(async (betlogsforUpdate) => {
      if (betlogsforUpdate.length == 0) {
        console.log("BetLogs is Nothing");
        // Emit NEWTURN Event
        Rooms.find().then((result) => {
          result.map((item, key1) => {
            // emit NEWTURN event
            BetLogs.find({
              lotteryType: lotteryTypesObjIDs[lotteryTypeIndex],
              room: item._id,
              isfinished: true,
              drawIssue: data.preDrawIssue,
            })
              .populate("user")
              .populate("lotteryResult")
              .then((betlogsdata) => {
                if (betlogsdata) {
                  console.log(
                    "new turn event1 To " + lotteryTypeIndex,
                    "  LeftTime : ",
                    new Date(data.drawTime).getTime() -
                      new Date().getTime() -
                      deltaTime
                  );

                  io.getIo()
                    .to(lotteryTypesObjIDs[lotteryTypeIndex] + item._id)
                    .emit(SOCKET_BET_NEWTURN_EVENT1, {
                      drawIssue: data.preDrawIssue,
                      result: data.preDrawCode,
                      userInfos: betlogsdata.map((item) => item.user),
                      leftTime:
                        new Date(data.drawTime).getTime() -
                        new Date().getTime() -
                        deltaTime,
                      betlogs: betlogsdata,
                      lotteryType: lotteryTypesObjIDs[lotteryTypeIndex],
                    });

                  // roomID, preDrawIssue, preDrawCode, lotteryTypeID;
                  // get all left times
                  // send the NewTurn Event to the Game Hall
                  getGlobalApiLeftTimesData(
                    item._id,
                    data.preDrawIssue,
                    data.preDrawCode,
                    lotteryTypesObjIDs[lotteryTypeIndex],
                    betlogsdata.map((item) => item.user)
                  );
                }
              });
          });
        });
      } else {
        await Promise.all(
          betlogsforUpdate.map(async (betlogforUpdate, key) => {
            if (
              betlogforUpdate.lotteryResult == undefined ||
              betlogforUpdate.lotteryResult == null
            ) {
              betlogforUpdate.lotteryResult = newLotteryResultRow._id;
              betlogforUpdate.isfinished = true;

              await betlogforUpdate.save();

              // emit turn change event to the multiple users
              var user = await Users.findOne({
                _id: betlogforUpdate.user,
              });
              BetLogs.findOne({
                _id: betlogforUpdate._id,
                content_type: "bet_code",
                isfinished: true,
              })
                .populate("lotteryResult")
                .then(async (betlogforcalc) => {
                  var numcalcResult = LastBettingCalc(
                    betlogforcalc.content,
                    betlogforcalc.betType,
                    betlogforcalc.lotteryResult.result,
                    user.point
                  );
                  betlogforcalc.bettingResult = numcalcResult.bettingResults;

                  var updatedBetLog = await betlogforcalc.save();
                  await betlogforcalc.save();

                  user.point = numcalcResult.updatedpoint;

                  // update relpoints
                  user.relpoints.map((item, key) => {
                    if (
                      item.lotteryType == lotteryTypesObjIDs[lotteryTypeIndex]
                    ) {
                      item.relProfit += numcalcResult.realProfit;
                    }
                  });
                  await user.save();
                });
            }
          })
        );

        console.log("BetLogs is Not Nothing. ");
        // Emit NEWTURN Event
        Rooms.find().then((result) => {
          result.map(async (item, key1) => {
            var ltres = await LotteryResult.findOne({
              drawIssue: data.preDrawIssue,
            });

            BetLogs.find({
              lotteryType: lotteryTypesObjIDs[lotteryTypeIndex],
              room: item._id,
              isfinished: true,
              lotteryResult: newLotteryResultRow._id,
              content_type: "bet_code",
            })
              .populate("user")
              .populate("lotteryResult")
              .then((betlogsdata) => {
                if (betlogsdata) {

                  io.getIo()
                    .to(lotteryTypesObjIDs[lotteryTypeIndex] + item._id)
                    .emit(SOCKET_BET_NEWTURN_EVENT1, {
                      drawIssue: data.preDrawIssue,
                      result: data.preDrawCode,
                      // userpoint: betlogsdata.user.point,
                      leftTime:
                        new Date(data.drawTime).getTime() -
                        new Date().getTime() -
                        deltaTime,
                      betlogs: betlogsdata,
                      userInfos: betlogsdata.map((item) => item.user),
                      lotteryType: lotteryTypesObjIDs[lotteryTypeIndex],
                    });

                  // io.getIo()
                  //   .to(item._id + "")
                  //   .emit(SOCKET_BET_NEWTURN_EVENT, {
                  //     drawIssue: data.preDrawIssue,
                  //     result: data.preDrawCode,
                  //     userpoint: betlogsdata.user.point,
                  //     leftTime:
                  //       new Date(data.drawTime).getTime() -
                  //       new Date().getTime() -
                  //       deltaTime,
                  //     lotteryType:
                  //       lotteryTypesObjIDs[lotteryTypeIndex],
                  //   });

                  // roomID, preDrawIssue, preDrawCode, lotteryTypeID;
                  // get all left times
                  // send the NewTurn Event to the Game Hall
                  getGlobalApiLeftTimesData(
                    item._id,
                    data.preDrawIssue,
                    data.preDrawCode,
                    lotteryTypesObjIDs[lotteryTypeIndex],
                    betlogsdata.map((item) => item.user)
                    // betlogsdata.user.point
                  );
                } else {
                  console.log("betlogsdata is null", {
                    lotteryType: lotteryTypesObjIDs[lotteryTypeIndex],
                    room: item._id,
                    isfinished: true,
                    lotteryResult: newLotteryResultRow._id,
                    content_type: "bet_code",
                  });
                }
              })
              .catch((err) => {
                console.log(err);
              });
          });
        });
      }
    });
};

const saveLotteryResult = async (data, lotteryTypeIndex) => {
  console.log("saveLotterResult", lotteryTypeIndex);
  var result = await LotteryResult.find({
    drawIssue: data.preDrawIssue,
    lotteryType: lotteryTypesObjIDs[lotteryTypeIndex],
  });

  if (result.length == 0) {
    var newLotteryResultRow = await new LotteryResult({
      drawIssue: data.preDrawIssue,
      result: data.preDrawCode,
      drawTime: data.preDrawTime,
      nextdrawTime: data.drawTime,
      lotteryType: lotteryTypesObjIDs[lotteryTypeIndex],
      createdAt: new Date(),
    }).save();

    insertBotCodeAndupdateBettingResult(
      newLotteryResultRow,
      lotteryTypeIndex,
      data
    );
    updateLotteryResultStas(
      lotteryTypesObjIDs[lotteryTypeIndex],
      data.preDrawCode
    );
    // BetLogs find and update
  } else {
    // console.log("already ");
    // emergency
    insertBotCodeAndupdateBettingResult(result, lotteryTypeIndex, data);
  }
};

const intervalFunc = () => {
  // check
  arrGlobalApiData.map((item, key) => {
    // key 0 ~ 4

    // UPDATE EVENT EMIT
    if (
      new Date(item.drawTime).getTime() < new Date().getTime() + deltaTime &&
      new Date(item.drawTime).getTime() >
        new Date().getTime() + deltaTime - 1000
    ) {
      console.log("update event emit", key);
      // with updated status key
      updateApiData(key);
    }
    // BLOCKING EVENT EMIT
    else if (
      new Date(item.drawTime).getTime() <
        new Date().getTime() + deltaTime + BLOCKING_TIME &&
      new Date(item.drawTime).getTime() >
        new Date().getTime() + deltaTime + BLOCKING_TIME - 1000
    ) {
      // console.log("blocking event emit");
      Rooms.find().then((result) => {
        result.map((item, key1) => {
          // emit blocking time event
          io.getIo()
            .to(lotteryTypesObjIDs[key] + item._id)
            .emit(SOCKET_BET_BLOCKING_EVENT1, {
              lotteryType: lotteryTypesObjIDs[key],
            });

          io.getIo()
            .to(item._id + "")
            .emit(SOCKET_BET_BLOCKING_EVENT, {
              lotteryType: lotteryTypesObjIDs[key],
            });
        });
      });
    }
    // WARNING EVENT EMIT
    else if (
      new Date(item.drawTime).getTime() <
        new Date().getTime() + deltaTime + WARNING_TIME &&
      new Date(item.drawTime).getTime() >
        new Date().getTime() + deltaTime + WARNING_TIME - 1000
    ) {
      Rooms.find().then((result) => {
        result.map((item, key1) => {
          // emit warning time event
          // console.log(lotteryTypesObjIDs[key], item._id);
          console.log("warning event emit", key);
          io.getIo()
            .to(lotteryTypesObjIDs[key] + item._id)
            .emit(SOCKET_BET_WARNING_EVENT1, {
              lotteryType: lotteryTypesObjIDs[key],
            });

          io.getIo()
            .to(item._id + "")
            .emit(SOCKET_BET_WARNING_EVENT, {
              lotteryType: lotteryTypesObjIDs[key],
            });
        });
      });
    }
  });
};

const updateApiData = (lotteryTypeIndex) => {
  const request = https.request(
    lotteryTypesApiUrls[lotteryTypeIndex],
    (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data = data + chunk.toString();
      });

      response.on("end", () => {
        const body = JSON.parse(data);
        // Emit DRAWING Event
        Rooms.find().then((result) => {
          result.map((item, key) => {
            // emit drawing event
            // console.log("drawing event", key);
            io.getIo()
              .to(lotteryTypesObjIDs[lotteryTypeIndex] + item._id)
              .emit(SOCKET_BET_DRWAING_EVENT1, {
                lotteryType: lotteryTypesObjIDs[lotteryTypeIndex],
              });

            io.getIo()
              .to(item._id + "")
              .emit(SOCKET_BET_DRWAING_EVENT, {
                lotteryType: lotteryTypesObjIDs[lotteryTypeIndex],
              });
          });
        });

        //save data to the db
        saveLotteryResult(body.result.data, lotteryTypeIndex);

        //update array
        arrGlobalApiData[lotteryTypeIndex] = body.result.data;
      });
    }
  );

  request.on("error", (error) => {
    printLog("An error3", error);
  });

  request.end();
};

const globalApiStart = () => {
  LotteryTypes.find()
    .then((result) => {
      lotteryTypesObjIDs = result.map((item) => item._id);
      lotteryTypesApiUrls = result.map((item) => item.apiUrl);
      getGlobalApiData();
    })
    .catch((err) => {
      console.log("getLotteryTypes error", err);
    });
};

const updateLotteryResultStas = (lotteryType, lotteryResultValue) => {
  let lotteryResult = [],
    lotteryStas = [],
    result = [];

  lotteryResult = lotteryResultValue.split(",").map((item) => {
    return parseInt(item, 10);
  });
  LotteryResultStas.findOne({
    lotteryType,
  })
    .then((res) => {
      if (!res) {
        let initialArray = new Array(171).fill(0);
        for (let j = 0; j < 171; j++) lotteryStas[j] = 0;
        LotteryResultStas.create({
          lotteryType,
          resultStatistics: initialArray,
        })
          .then((res) => {
            if (res.resultStatistics) lotteryStas = res.resultStatistics;
          })
          .catch((err) => {});
      }

      if (res) lotteryStas = res.resultStatistics;

      result = calcLottery(lotteryResult, lotteryStas);
      LotteryResultStas.updateOne(
        {
          lotteryType,
        },
        {
          resultStatistics: result,
        },
        function (err, res) {
          if (err) printLog(err);
        }
      );
    })
    .catch((err) => printLog(err));
};

const calcLottery = (lotteryResult, lotteryStas) => {
  for (let i = 0; i < 150; i++) {
    if (i < 100) {
      // Number Rule
      if (lotteryResult[i % 10] == parseInt(i / 10) + 1) lotteryStas[i]++;
      else lotteryStas[i] = 0;
    } else if (i < 110) {
      // da
      if (lotteryResult[i - 100] >= 6) lotteryStas[i]++;
      else lotteryStas[i] = 0;
    } else if (i < 120) {
      // shao
      if (lotteryResult[i - 110] < 6) lotteryStas[i]++;
      else lotteryStas[i] = 0;
    } else if (i < 130) {
      // even
      if (lotteryResult[i - 120] % 2 == 0) lotteryStas[i]++;
      else lotteryStas[i] = 0;
    } else if (i < 140) {
      // even
      if (lotteryResult[i - 130] % 2 == 1) lotteryStas[i]++;
      else lotteryStas[i] = 0;
    } else if (i < 145) {
      // dragon
      if (lotteryResult[i - 140] > lotteryResult[149 - i]) lotteryStas[i]++;
      else lotteryStas[i] = 0;
    } else if (i < 150) {
      // tiger
      if (lotteryResult[i - 145] < lotteryResult[154 - i]) lotteryStas[i]++;
      else lotteryStas[i] = 0;
    } else {
    }
  }
  temp = lotteryResult[0] + lotteryResult[1];
  for (let j = 3; j < 20; j++) {
    if (temp == j) lotteryStas[150 + j - 3]++;
    else lotteryStas[150 + j - 3] = 0;
  }
  if (temp > 11) {
    lotteryStas[167]++;
    lotteryStas[168] = 0;
  } else {
    lotteryStas[168]++;
    lotteryStas[167] = 0;
  }
  if (temp % 2 == 0) {
    lotteryStas[169]++;
    lotteryStas[170] = 0;
  } else {
    lotteryStas[170]++;
    lotteryStas[169] = 0;
  }
  // console.log(lotteryStas); // pwr
  return lotteryStas;
};

module.exports = globalApiStart;
