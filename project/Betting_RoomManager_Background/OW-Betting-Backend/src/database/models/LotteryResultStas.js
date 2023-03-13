const { Schema, model, SchemaTypes } = require("mongoose");

const LotteryResultStas = new Schema({
  lotteryType: {
    type: SchemaTypes.ObjectId,
    ref: "LotteryTypes",
  },
  resultStatistics: {
    type: [Number],
    default: [],
  },
});
// type: [Number],
//     default: new Array(171),
//     required: true,
LotteryResultStas.set("timestamps", true);
const LotteryResultstas = model("LotteryResultStastics", LotteryResultStas);

module.exports = LotteryResultstas;
