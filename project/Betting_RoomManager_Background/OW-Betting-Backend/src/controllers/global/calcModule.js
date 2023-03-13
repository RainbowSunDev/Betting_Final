const { splitByOneCharacter, splitBySlash } = require("../../utils/utils");
/**
 * Calculate the betting results and profits from the each betlogo until the next u0
 * @param {String} content
 * @param {String} betType
 * @param {String} result
 * @returns bettingResult
 */

const locPattern = [
  "冠军",
  "亚军",
  "第三名",
  "第四名",
  "第五名",
  "第六名",
  "第七名",
  "第八名",
  "第九名",
  "第十名",
  "冠亚和",
];

const betPattern = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  "大",
  "小",
  "双",
  "单",
  "龙",
  "虎",
];

// {
//   odds: [
//     { NUM: 9.8 },
//     { BS: 1.96 },
//     { EO: 1.96 },
//     { DT: 1.96 },
//     ("FSN": [40, 20, 12, 10, 8]),
//     ("FSBS": [1.96]),
//   ];
// }

const replaceZeroWithTen = (vals) => {
  for (var i = 0; i < vals.length; i++) {
    vals[i] = vals[i] == 0 ? 10 : vals[i];
  }

  return vals;
};

const LastBettingCalc = (content, betType, result, userpoint) => {
  // only plus
  var results = result.split(",");
  var localContent = content;
  var bettingResult = []; // this is object array
  var plusPoint = 0;
  var minusPoint = 0;
  var originUserpoint = userpoint;
  // console.log("previous UserPoint", userpoint);
  switch (betType) {
    case "NUM":
      // console.log({ localContent });
      // if the content is 12/234/50 or 234/50 => 1/234/50
      if (splitBySlash(localContent).length == 2)
        localContent = "1/" + localContent;
      let arrContents = splitBySlash(localContent);
      let positions = splitByOneCharacter(arrContents[0]); // Array
      let numbers = splitByOneCharacter(arrContents[1]); // Array
      let betting_value = arrContents[2]; // nunber => betting point betted by user.

      positions = replaceZeroWithTen(positions);
      numbers = replaceZeroWithTen(numbers);

      for (var i = 0; i < positions.length; i++) {
        for (var j = 0; j < numbers.length; j++) {
          minusPoint += Number(betting_value);
          if (Number(results[positions[i]]) == numbers[j]) {
            bettingResult.push({
              description: [
                locPattern[positions[i] - 1],
                betPattern[numbers[j] - 1],
                "Win",
              ],
              profit: Number(betting_value) * 9.8,
            });

            userpoint += Number(betting_value) * 9.8;
          } else {
            bettingResult.push({
              description: [
                locPattern[positions[i] - 1],
                betPattern[numbers[j] - 1],
                "Lose",
              ],
              profit: Number(betting_value * -1),
            });

            // userpoint -= Number(betting_value);
          }
        }
      }
      // console.log({ bettingResult });
      break;
    case "BS":
      if (localContent.indexOf("大") != -1) {
        if (localContent.indexOf("大") == 0) {
          localContent = "1" + localContent;
        }

        console.log(localContent, localContent.split("大"));

        let arrContents = localContent.split("大");
        let positions = splitByOneCharacter(arrContents[0]); // Array
        positions = replaceZeroWithTen(positions);
        let betting_value = arrContents[1];
        for (var i = 0; i < positions.length; i++) {
          minusPoint += Number(betting_value);
          if (Number(results[positions[i]]) >= 6) {
            bettingResult.push({
              description: [
                locPattern[positions[i] - 1],
                betPattern[10],
                "Win",
              ],
              profit: Number(betting_value) * 1.96,
            });

            userpoint += Number(betting_value) * 1.96;
          } else {
            bettingResult.push({
              description: [
                locPattern[positions[i] - 1],
                betPattern[10],
                "Lose",
              ],
              profit: Number(betting_value) * -1,
            });

            // userpoint -= Number(betting_value);
          }
        }
      } else {
        //小
        if (localContent.indexOf("小") == 0) {
          localContent = "1" + localContent;
        }
        console.log(localContent);
        let arrContents = localContent.split("小");
        let positions = splitByOneCharacter(arrContents[0]); // Array
        positions = replaceZeroWithTen(positions);
        let betting_value = arrContents[1];
        for (var i = 0; i < positions.length; i++) {
          minusPoint += Number(betting_value);
          if (Number(results[positions[i]]) <= 5) {
            bettingResult.push({
              description: [
                locPattern[positions[i] - 1],
                betPattern[11],
                "Win",
              ],
              profit: Number(betting_value) * 1.96,
            });

            userpoint += Number(betting_value) * 1.96;
          } else {
            bettingResult.push({
              description: [
                locPattern[positions[i] - 1],
                betPattern[11],
                "Lose",
              ],
              profit: Number(betting_value) * -1,
            });

            // userpoint -= Number(betting_value);
          }
        }
      }
      break;
    case "EO":
      if (localContent.indexOf("单") != -1) {
        if (localContent.indexOf("单") == 0) {
          localContent = "1" + localContent;
        }
        let arrContents = localContent.split("单");
        let positions = splitByOneCharacter(arrContents[0]); // Array
        positions = replaceZeroWithTen(positions);
        let betting_value = arrContents[1];
        for (var i = 0; i < positions.length; i++) {
          minusPoint += Number(betting_value);
          if (Number(results[positions[i]]) % 2 == 1) {
            bettingResult.push({
              description: [
                locPattern[positions[i] - 1],
                betPattern[13],
                "Win",
              ],
              profit: Number(betting_value) * 1.96,
            });

            userpoint += Number(betting_value) * 1.96;
          } else {
            bettingResult.push({
              description: [
                locPattern[positions[i] - 1],
                betPattern[13],
                "Lose",
              ],
              profit: Number(betting_value) * -1,
            });

            // userpoint -= Number(betting_value);
          }
        }
      } else {
        //双
        if (localContent.indexOf("双") == 0) {
          localContent = "1" + localContent;
        }
        let arrContents = localContent.split("双");
        let positions = splitByOneCharacter(arrContents[0]); // Array
        positions = replaceZeroWithTen(positions);
        let betting_value = arrContents[1];
        for (var i = 0; i < positions.length; i++) {
          minusPoint += Number(betting_value);
          if (Number(results[positions[i]]) % 2 == 0) {
            bettingResult.push({
              description: [
                locPattern[positions[i] - 1],
                betPattern[12],
                "Win",
              ],
              profit: Number(betting_value) * 1.96,
            });

            userpoint += Number(betting_value) * 1.96;
          } else {
            bettingResult.push({
              description: [
                locPattern[positions[i] - 1],
                betPattern[12],
                "Lose",
              ],
              profit: Number(betting_value) * -1,
            });

            // userpoint -= Number(betting_value);
          }
        }
      }
      break;
    case "DT":
      if (localContent.indexOf("龙") != -1) {
        if (localContent.indexOf("龙") == 0) {
          localContent = "1" + localContent;
        }
        let arrContents = localContent.split("龙");
        let positions = splitByOneCharacter(arrContents[0]); // Array
        positions = replaceZeroWithTen(positions);
        let betting_value = arrContents[1];
        for (var i = 0; i < positions.length; i++) {
          minusPoint += Number(betting_value);
          if (
            Number(results[positions[i]]) > Number(results[11 - positions[i]])
          ) {
            bettingResult.push({
              description: [
                locPattern[positions[i] - 1],
                betPattern[14],
                "Win",
              ],
              profit: Number(betting_value) * 1.96,
            });

            userpoint += Number(betting_value) * 1.96;
          } else {
            bettingResult.push({
              description: [
                locPattern[positions[i] - 1],
                betPattern[14],
                "Lose",
              ],
              profit: Number(betting_value) * -1,
            });

            // userpoint -= Number(betting_value);
          }
        }
      } else {
        //虎
        if (localContent.indexOf("虎") == 0) {
          localContent = "1" + localContent;
        }
        let arrContents = localContent.split("虎");
        let positions = splitByOneCharacter(arrContents[0]); // Array
        positions = replaceZeroWithTen(positions);
        let betting_value = arrContents[1];
        for (var i = 0; i < positions.length; i++) {
          minusPoint += Number(betting_value);
          if (
            Number(results[positions[i]]) < Number(results[11 - positions[i]])
          ) {
            bettingResult.push({
              description: [
                locPattern[positions[i] - 1],
                betPattern[15],
                "Win",
              ],
              profit: Number(betting_value) * 1.96,
            });

            userpoint += Number(betting_value) * 1.96;
          } else {
            bettingResult.push({
              description: [
                locPattern[positions[i] - 1],
                betPattern[15],
                "Lose",
              ],
              profit: Number(betting_value) * -1,
            });

            // userpoint -= Number(betting_value);
          }
        }
      }
      break;
    case "FSN":
      {
        localContent = localContent.substring(3);
        console.log("localContent===>", localContent);
        let arrContents = localContent.split("/");
        console.log("arrContents===>", arrContents);
        let sums = splitByOneCharacter(arrContents[0]); // Array
        sums = replaceZeroWithTen(sums);
        let betting_value = arrContents[1];
        for (var i = 0; i < sums.length; i++) {
          minusPoint += Number(betting_value);
          if (results[0] + results[1] == sums[i]) {
            if (
              sums[i] == 3 ||
              sums[i] == 4 ||
              sums[i] == 18 ||
              sums[i] == 19
            ) {
              userpoint += Number(betting_value) * 40;
              bettingResult.push({
                description: [locPattern[10], sums[i], "Win"],
                profit: Number(betting_value) * 40,
              });
            } else if (
              sums[i] == 5 ||
              sums[i] == 6 ||
              sums[i] == 16 ||
              sums[i] == 17
            ) {
              userpoint += Number(betting_value) * 20;
              bettingResult.push({
                description: [locPattern[10], sums[i], "Win"],
                profit: Number(betting_value) * 20,
              });
            } else if (
              sums[i] == 7 ||
              sums[i] == 8 ||
              sums[i] == 14 ||
              sums[i] == 15
            ) {
              userpoint += Number(betting_value) * 12;
              bettingResult.push({
                description: [locPattern[10], sums[i], "Win"],
                profit: Number(betting_value) * 12,
              });
            } else if (
              sums[i] == 9 ||
              sums[i] == 10 ||
              sums[i] == 12 ||
              sums[i] == 13
            ) {
              userpoint += Number(betting_value) * 10;
              bettingResult.push({
                description: [locPattern[10], sums[i], "Win"],
                profit: Number(betting_value) * 10,
              });
            } else {
              userpoint += Number(betting_value) * 8;
              bettingResult.push({
                description: [locPattern[10], sums[i], "Win"],
                profit: Number(betting_value) * 8,
              });
            }
          } else {
            bettingResult.push({
              description: [locPattern[10], sums[i], "Lose"],
              profit: Number(betting_value * -1),
            });

            // userpoint -= Number(betting_value);
          }
        }
      }
      break;
    case "FSEO":
      // 单 双
      if (localContent.indexOf("单") != -1) {
        // 单 Odd
        console.log(localContent);
        localContent = localContent.substring(4);
        console.log(localContent);
        let betting_value = Number(localContent);
        minusPoint += Number(betting_value);
        if ((results[0] + results[1]) % 2 == 1) {
          bettingResult.push({
            description: [locPattern[10], betPattern[13], "Win"],
            profit: Number(betting_value) * 1.96,
          });

          userpoint += Number(betting_value) * 1.96;
        } else {
          bettingResult.push({
            description: [locPattern[10], betPattern[13], "Lose"],
            profit: Number(betting_value * -1),
          });

          //   userpoint -= Number(betting_value);
        }
      } else {
        // 双 Even
        console.log(localContent);
        localContent = localContent.substring(4);
        console.log(localContent);
        let betting_value = Number(localContent);
        minusPoint += Number(betting_value);
        if ((results[0] + results[1]) % 2 == 0) {
          bettingResult.push({
            description: [locPattern[10], betPattern[12], "Win"],
            profit: Number(betting_value) * 1.96,
          });

          userpoint += Number(betting_value) * 1.96;
        } else {
          bettingResult.push({
            description: [locPattern[10], betPattern[12], "Lose"],
            profit: Number(betting_value * -1),
          });

          //   userpoint -= Number(betting_value);
        }
      }
      break;
    case "FSBS":
      // 大小
      if (localContent.indexOf("大") != -1) {
        // 大
        console.log(localContent);
        localContent = localContent.substring(4);
        console.log(localContent);
        let betting_value = Number(localContent);

        minusPoint += Number(betting_value);
        if (results[0] + results[1] >= 6) {
          bettingResult.push({
            description: [locPattern[10], betPattern[10], "Win"],
            profit: Number(betting_value) * 1.96,
          });

          userpoint += Number(betting_value) * 1.96;
        } else {
          bettingResult.push({
            description: [locPattern[10], betPattern[10], "Lose"],
            profit: Number(betting_value * -1),
          });

          //   userpoint -= Number(betting_value);
        }
      } else {
        // 小
        console.log(localContent);
        localContent = localContent.substring(4);
        console.log(localContent);
        let betting_value = Number(localContent);

        minusPoint += Number(betting_value);
        if (results[0] + results[1] <= 5) {
          bettingResult.push({
            description: [locPattern[10], betPattern[11], "Win"],
            profit: Number(betting_value) * 1.96,
          });

          userpoint += Number(betting_value) * 1.96;
        } else {
          bettingResult.push({
            description: [locPattern[10], betPattern[11], "Lose"],
            profit: Number(betting_value * -1),
          });

          //   userpoint -= Number(betting_value);
        }
      }
      break;
    case "none":
      break;
  }

  plusPoint = userpoint - originUserpoint;
  // console.log("numBettingCalc====>", { bettingResult });
  // console.log("updated UserPoint", userpoint);
  return {
    bettingResults: bettingResult,
    updatedpoint: userpoint,
    realProfit: plusPoint - minusPoint,
  };
};

const MiddleBettingCalc = (content, betType, userpoint) => {
  // return the minus userpoint
  var localContent = content;
  var originalUserPoint = userpoint;
  // console.log("previous UserPoint", userpoint);
  switch (betType) {
    case "NUM":
      // console.log({ localContent });
      // if the content is 12/234/50 or 234/50 => 1/234/50
      if (splitBySlash(localContent).length == 2)
        localContent = "1/" + localContent;
      let arrContents = splitBySlash(localContent);
      let positions = splitByOneCharacter(arrContents[0]); // Array
      let numbers = splitByOneCharacter(arrContents[1]); // Array
      let betting_value = arrContents[2]; // nunber => betting point betted by user.

      positions = replaceZeroWithTen(positions);
      numbers = replaceZeroWithTen(numbers);

      for (var i = 0; i < positions.length; i++) {
        for (var j = 0; j < numbers.length; j++) {
          userpoint -= Number(betting_value);
        }
      }
      // console.log({ bettingResult });
      break;
    case "BS":
      if (localContent.indexOf("大") != -1) {
        if (localContent.indexOf("大") == 0) {
          localContent = "1" + localContent;
        }

        console.log(localContent, localContent.split("大"));

        let arrContents = localContent.split("大");
        let positions = splitByOneCharacter(arrContents[0]); // Array
        positions = replaceZeroWithTen(positions);
        let betting_value = arrContents[1];
        for (var i = 0; i < positions.length; i++) {
          userpoint -= Number(betting_value);
        }
      } else {
        //小
        if (localContent.indexOf("小") == 0) {
          localContent = "1" + localContent;
        }
        console.log(localContent);
        let arrContents = localContent.split("小");
        let positions = splitByOneCharacter(arrContents[0]); // Array
        positions = replaceZeroWithTen(positions);
        let betting_value = arrContents[1];
        for (var i = 0; i < positions.length; i++) {
          userpoint -= Number(betting_value);
        }
      }
      break;
    case "EO":
      if (localContent.indexOf("单") != -1) {
        if (localContent.indexOf("单") == 0) {
          localContent = "1" + localContent;
        }
        let arrContents = localContent.split("单");
        let positions = splitByOneCharacter(arrContents[0]); // Array
        positions = replaceZeroWithTen(positions);
        let betting_value = arrContents[1];
        for (var i = 0; i < positions.length; i++) {
          userpoint -= Number(betting_value);
        }
      } else {
        //双
        if (localContent.indexOf("双") == 0) {
          localContent = "1" + localContent;
        }
        let arrContents = localContent.split("双");
        let positions = splitByOneCharacter(arrContents[0]); // Array
        positions = replaceZeroWithTen(positions);
        let betting_value = arrContents[1];
        for (var i = 0; i < positions.length; i++) {
          userpoint -= Number(betting_value);
        }
      }
      break;
    case "DT":
      if (localContent.indexOf("龙") != -1) {
        if (localContent.indexOf("龙") == 0) {
          localContent = "1" + localContent;
        }
        let arrContents = localContent.split("龙");
        let positions = splitByOneCharacter(arrContents[0]); // Array
        positions = replaceZeroWithTen(positions);
        let betting_value = arrContents[1];
        for (var i = 0; i < positions.length; i++) {
          userpoint -= Number(betting_value);
        }
      } else {
        //虎
        if (localContent.indexOf("虎") == 0) {
          localContent = "1" + localContent;
        }
        let arrContents = localContent.split("虎");
        let positions = splitByOneCharacter(arrContents[0]); // Array
        positions = replaceZeroWithTen(positions);
        let betting_value = arrContents[1];
        for (var i = 0; i < positions.length; i++) {
          userpoint -= Number(betting_value);
        }
      }
      break;
    case "FSN":
      {
        localContent = localContent.substring(3);
        console.log("localContent===>", localContent);
        let arrContents = localContent.split("/");
        console.log("arrContents===>", arrContents);
        let sums = splitByOneCharacter(arrContents[0]); // Array
        sums = replaceZeroWithTen(sums);
        let betting_value = arrContents[1];
        for (var i = 0; i < sums.length; i++) {
          userpoint -= Number(betting_value);
        }
      }
      break;
    case "FSEO":
      // 单 双
      if (localContent.indexOf("单") != -1) {
        // 单 Odd
        console.log(localContent);
        localContent = localContent.substring(4);
        console.log(localContent);
        let betting_value = Number(localContent);
        userpoint -= Number(betting_value);
      } else {
        // 双 Even
        console.log(localContent);
        localContent = localContent.substring(4);
        console.log(localContent);
        let betting_value = Number(localContent);
        userpoint -= Number(betting_value);
      }
      break;
    case "FSBS":
      // 大小
      if (localContent.indexOf("大") != -1) {
        // 大
        console.log(localContent);
        localContent = localContent.substring(4);
        console.log(localContent);
        let betting_value = Number(localContent);
        userpoint -= Number(betting_value);
      } else {
        // 小
        console.log(localContent);
        localContent = localContent.substring(4);
        console.log(localContent);
        let betting_value = Number(localContent);
        userpoint -= Number(betting_value);
      }
      break;
    case "none":
      break;
  }

  // console.log("numBettingCalc====>", { bettingResult });
  // console.log("updated UserPoint", userpoint);
  return {
    updateduserpoint: userpoint,
    betAmount: originalUserPoint - userpoint,
  };
};
module.exports = { LastBettingCalc, MiddleBettingCalc };
