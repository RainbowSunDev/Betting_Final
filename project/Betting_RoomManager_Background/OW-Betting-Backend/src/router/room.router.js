const express = require("express");
const { checkRoomUser } = require("../controllers/room");
const roomRouter = express.Router();

roomRouter.post("/checkRoomUser", checkRoomUser);

module.exports = roomRouter;
