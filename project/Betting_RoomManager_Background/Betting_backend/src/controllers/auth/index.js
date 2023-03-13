const { authUtils } = require("../../utils");

const { RES_MSG_SERVER_ERROR } = require("../../constants");
const { printLog } = require("../../utils/log");

const login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    await authUtils.validateLoginCredentials({ username, password });

    const user = await authUtils.getUserByName(username);

    await authUtils.checkPassword(password, user.password);

    const token = await authUtils.createToken(user, user.userRole);

    res.status(200).json({
      id: user._id,
      username,
      avatar: user.avatar,
      nickname: user.nickname,
      token,
      room_history: user.roomHistory,
    });
  } catch (err) {
    printLog(err);
    res.status(500).send({ message: RES_MSG_SERVER_ERROR });
  }
};

const signup = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    await authUtils.validateSignUpData({ username, password });
    await authUtils.isNewUsername(username);
    await authUtils.createUser({ username, password });

    res
      .status(200)
      .json({ statusCode: 200, message: "signed up successfully" });
  } catch (err) {
    printLog(err);
    res.status(500).send({ message: RES_MSG_SERVER_ERROR });
  }
};

module.exports = { login, signup };
