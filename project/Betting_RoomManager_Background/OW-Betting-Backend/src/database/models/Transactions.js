const { Schema, model, SchemaTypes } = require("mongoose");

const TransactionsSchema = new Schema({
  user: {
    type: SchemaTypes.ObjectId,
    ref: "Users",
  },
  description: {
    type: String,
    trim: true,
  },
  profit: {
    type: Number,
  },
  txDateTime: {
    type: Date,
    default: new Date(),
  },
});
TransactionsSchema.set("timestamps", true);
const Transactions = model("Transactions", TransactionsSchema);

module.exports = Transactions;
