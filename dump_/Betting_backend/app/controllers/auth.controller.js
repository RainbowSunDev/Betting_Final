const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
  RES_MSG_SERVER_ERROR,
  RES_MSG_INVALID_PASSWORD,
  RES_MSG_USER_NOT_FOUND,
} = require("../constants");

register = async (req, res) => {
  // Save User to Database
  try {
    const user = await User.create({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    var role = "user";

    // if (req.body.roles) {
    const roles = await Role.findAll({
      where: {
        name: {
          [Op.or]: [role],
        },
      },
    });

    const result = user.setRoles(roles);
    if (result)
      res.status(200).send({ message: "User registered successfully!" });
    // } else {
    //   // user has role = 1
    //   const result = user.setRoles([1]);
    //   if (result) res.send({ message: "User registered successfully!" });
    // }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: RES_MSG_SERVER_ERROR });
  }
};

login = async (req, res) => {console.log(req.body)
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      return res.status(404).json({ message: RES_MSG_USER_NOT_FOUND });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        message: RES_MSG_INVALID_PASSWORD,
      });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    let authorities = [];
    const roles = await user.getRoles();
    for (let i = 0; i < roles.length; i++) {
      authorities.push("ROLE_" + roles[i].name.toUpperCase());
    }

    req.session.token = token;

    return res.status(200).send({
      id: user.id,
      username: user.username,
      password: req.body.password,
      roles: authorities,
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: RES_MSG_SERVER_ERROR });
  }
};

logout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({
      message: "You've been signed out!",
    });
  } catch (err) {
    this.next(err);
  }
};

module.exports = {
  login,
  register,
  logout,
};
