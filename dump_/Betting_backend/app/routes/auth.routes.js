const router = require("express").Router();
const { verifyRegister } = require("../middleware");
const controller = require("../controllers/auth.controller");

router.post(
  "/register",
  [
    verifyRegister.checkDuplicateUsernameOrEmail,
    // verifyRegister.checkRolesExisted,
  ],
  controller.register
);
router.post("/login", controller.login);
router.post("/logout", controller.logout);

module.exports = router;
