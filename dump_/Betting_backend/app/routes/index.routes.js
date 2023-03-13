const router = require("express").Router();
const authRouter = require("./auth.routes");
const userRouter = require("./user.routes");
const roomRouter = require("./room.routes");

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
console.log('middleware');
  next();
});

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/rooms", roomRouter);

module.exports = router;
