const { Schema, model, SchemaTypes } = require("mongoose");

const LotteryResultsSchema = new Schema({
  result: {
    type: String,
    default: "",
    trim: true,
  },
  // startTime: {
  //   type: Date,
  //   required: true,
  // },
  drawTime: {
    type: Date,
    required: true,
  },
  nextdrawTime: {
    type: Date,
    required: true,
  },
  drawIssue: { type: String, trim: true },
  lotteryType: {
    type: SchemaTypes.ObjectId,
    ref: "LotteryTypes",
  },
  // lotteryTypeNumber: {
  //   type: Number,
  //   required: true,
  // },
  createdAt: {
    type: Date,
    required: true,
  },
});
LotteryResultsSchema.set("timestamps", true);
const LotteryResults = model("LotteryResults", LotteryResultsSchema);

module.exports = LotteryResults;
