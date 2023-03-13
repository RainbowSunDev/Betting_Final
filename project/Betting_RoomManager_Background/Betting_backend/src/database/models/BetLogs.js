const { Schema, model, SchemaTypes } = require("mongoose");

const UserBetLogsSchema = new Schema({
  user: {
    type: SchemaTypes.ObjectId,
    ref: "Users",
  },
  room: {
    type: SchemaTypes.ObjectId,
    ref: "Rooms",
  },
  lotteryResult: {
    // issue
    type: SchemaTypes.ObjectId,
    ref: "LotteryResults",
  },
  lotteryType: {
    // boat, pool, ...
    type: SchemaTypes.ObjectId,
    ref: "LotteryTypes",
  },
  content: {
    type: String,
    trim: true,
  },
  betType: {
    type: String,
    enum: ["NUM", "BS", "EO", "DT", "FSN", "FSEO", "FSBS", "none"],
    // NUM:number rule, BS : big/small, EO : even/odd, DT:dragon/tiger, FSS:first + second /number, FSEO:first+ second / even/odd, FSBS:first + second / big/small
  },
  content_type: {
    type: String,
    enum: ["bet_code", "req_code", "bot_code", "messy_code"],
  },
  betTime: {
    type: Date,
    default: new Date(),
  },
  isfinished: {
    // if betting is not finished, this value is false , and betting is finished, this value is true.
    type: Boolean,
    default: false,
  },
  bettingResult: {
    type: [Object],
    default: [],
  },
});

UserBetLogsSchema.set("timestamps", true);

const UserBetLogs = model("BetLogs", UserBetLogsSchema);

module.exports = UserBetLogs;
