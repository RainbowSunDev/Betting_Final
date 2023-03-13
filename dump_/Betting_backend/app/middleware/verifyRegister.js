const { RES_MSG_SERVER_ERROR, RES_MSG_AREADY_USE } = require("../constants");
const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    // Username
    let user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (user) {
      return res.status(400).send({
        message: RES_MSG_AREADY_USE,
      });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: RES_MSG_SERVER_ERROR,
    });
  }
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i],
        });
        return;
      }
    }
  }

  next();
};

const verifyRegister = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

module.exports = verifyRegister;
