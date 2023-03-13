const mongoose = require("mongoose");
const { printLog } = require("../utils/log");

const { NODE_ENV, DEV_DB, PRO_DB } = process.env;

let dbUrl;

if (NODE_ENV === "production") dbUrl = PRO_DB;
else dbUrl = DEV_DB;

if (!dbUrl) throw new Error("database url was not found");

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => printLog("connected to database successfully"))
  .catch((err) => printLog(err));

module.exports = mongoose.connection;
