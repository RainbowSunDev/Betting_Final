const { Schema, model } = require("mongoose");

// ski, pool, .... lottery types current = 5 types
const lotteryTypesSchema = new Schema({
  typeName: { type: String, trim: true },
  typeImg: { type: String, trim: true },
  typeNameImg: { type: String, trim: true },
  typeNumber: { type: Number },
  apiUrl: { type: String, trim: true },
  duration: Number,
  blockTime: Number,
  drawingTime: Number,
});
lotteryTypesSchema.set("timestamps", true);
const LotteryTypes = model("LotteryTypes", lotteryTypesSchema);

module.exports = LotteryTypes;
