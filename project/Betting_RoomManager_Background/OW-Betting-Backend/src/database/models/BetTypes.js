const { Schema, model } = require("mongoose");

const betTypesSchema = new Schema({
  typeName: String,
  comment: String,
});

betTypesSchema.set("timestamps", true);
const BetTypes = model("BetTypes", betTypesSchema);

module.exports = BetTypes;
