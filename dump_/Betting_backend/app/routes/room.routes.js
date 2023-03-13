const router = require("express").Router();
const { authJwt } = require("../middleware");
const controller = require("../controllers/room.controller");

router.get("/", controller.getRoomList);

router.post("/check", controller.checkRoom);

module.exports = router;
