const express = require("express");

const authRouter = require("./auth.router");
const roomRouter = require("./room.router");

const { withAuth } = require("../middleware");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/room", roomRouter);

module.exports = router;
