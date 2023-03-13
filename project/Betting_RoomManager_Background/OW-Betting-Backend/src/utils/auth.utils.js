const yup = require("yup");
const {
  RES_STATUS_BAD_REQUEST,
  RES_MSG_USER_NOT_FOUND,
} = require("../constants");

const bcrypt = require("bcrypt");
const createError = require("./createError");
const jwt = require("jsonwebtoken");
const Users = require("../database/models/Users");

const loginValidationSchema = yup.object().shape({
  // username: yup.string().required().min(8).max(20),
  // password: yup.string().required().min(3).max(20),
});

const signupValidationSchema = yup.object().shape({
  // username: yup.string().required().min(3).max(12),
  // password: yup.string().required().min(3).max(20),
});

const validateSignUpData = async (userData) => {
  try {
    await signupValidationSchema.validate(userData, {
      abortEarly: false,
    });
  } catch (err) {
    throw createError(400, "Bad Request", err.errors);
  }
};

const validateLoginCredentials = async ({ username, password }) => {
  try {
    await loginValidationSchema.validate(
      { username, password },
      {
        abortEarly: false,
      }
    );
  } catch (err) {
    throw createError(400, { message: RES_STATUS_BAD_REQUEST });
  }
};

const getUserByName = async (username) => {
  const user = await Users.findOne({ userId: username.trim() }).populate(
    "roomHistory"
  );
  if (!user) throw createError(400, RES_MSG_USER_NOT_FOUND, "User not found");
  return user;
};

const checkPassword = async (password, encryptedPassword) => {
  const comparisonResult = await bcrypt.compare(password, encryptedPassword);

  if (!comparisonResult)
    throw createError(401, RES_STATUS_BAD_REQUEST, "password is incorrect");
};

const signToken = (payload) =>
  new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.SECRET_KEY, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });

const createToken = async (userId, userRole) => {
  const payload = {};
  payload._id = userId._id;
  switch (userRole.role) {
    case 0:
      payload.role = "USER";
      break;
    case 1:
      payload.role = "AGENT";
      break;
    case 2:
      payload.role = "ROOMANAGER";
      break;
    case 3:
      payload.role = "SUPERADMIN";
    default:
  }
  payload.roomnumber = userRole.roomno;
  if (userRole.role === 0) {
    payload.role = "USER";
  }

  return signToken(payload);
};

const isNewUsername = async (username) => {
  const usernameExist = await Users.findOne({ userId: username });

  if (usernameExist)
    throw createError(400, { message: RES_STATUS_ALREADY_USE });
};

const createUser = async ({ username, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  await Users.create({ userId: username, password: hashedPassword });
};

module.exports = {
  validateLoginCredentials,
  validateSignUpData,
  getUserByName,
  checkPassword,
  createToken,
  signToken,
  isNewUsername,
  createUser,
};
