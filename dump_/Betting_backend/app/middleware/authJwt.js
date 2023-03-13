const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const {
  RES_MSG_UNABLE_VALIDATE_ROLE,
  RES_MSG_UNAUTHORIZED,
  RES_MSG_NO_TOKEN,
  RES_MSG_REQUIRE_ROLE,
} = require("../constants.js");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.session.token;

  if (!token) {
    return res.status(403).send({
      message: RES_MSG_NO_TOKEN,
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: RES_MSG_UNAUTHORIZED,
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.userId);
    const roles = await user.getRoles();

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        return next();
      }
    }

    return res.status(403).send({
      message: RES_MSG_REQUIRE_ROLE,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: RES_MSG_UNABLE_VALIDATE_ROLE });
  }
};

isModerator = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.userId);
    const roles = await user.getRoles();

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "moderator") {
        return next();
      }
    }

    return res.status(403).send({
      message: RES_MSG_REQUIRE_ROLE,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: RES_MSG_UNABLE_VALIDATE_ROLE });
  }
};

isModeratorOrAdmin = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.userId);
    const roles = await user.getRoles();

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "moderator") {
        return next();
      }

      if (roles[i].name === "admin") {
        return next();
      }
    }

    return res.status(403).send({
      message: RES_MSG_REQUIRE_ROLE,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: RES_MSG_UNABLE_VALIDATE_ROLE });
  }
};

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator,
  isModeratorOrAdmin,
};

module.exports = authJwt;
