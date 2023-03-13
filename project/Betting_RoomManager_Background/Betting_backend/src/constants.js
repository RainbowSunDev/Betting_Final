const RES_STATUS_ERROR = 0; // other errors
const RES_STATUS_SUCCESS = 1; // 200
const RES_STATUS_ALREADY_USE = 2; // 400
const RES_STATUS_UNAUTHORIZED = 3; //401
const RES_STATUS_BAD_REQUEST = 4; //403
const RES_STATUS_NOT_FOUND = 5; //404
const RES_STATUS_SERVER_ERROR = 6; //500

const RES_MSG_ERROR = 0; // error
const RES_MSG_INVALID_PASSWORD = 1; //invalid password
const RES_MSG_NO_TOKEN = 2; // no token provide
const RES_MSG_REQUIRE_ROLE = 3; // require role
const RES_MSG_SERVER_ERROR = 4; // server error
const RES_MSG_UNABLE_VALIDATE_ROLE = 5; // no valide role
const RES_MSG_UNAUTHORIZED = 6; // unauthorized
const RES_MSG_USER_NOT_FOUND = 7; //user not found
const RES_MSG_AREADY_USE = 8; // already user exist
const RES_MSG_INVALID_ROOMNUMBER = 9; // invalid room number
const RES_MSG_NOT_FOUND_ROOM = 10; // not found room
const RES_MSG_NOT_ALLOWED_ROOM = 11; // not allowed room for user

const GAME_TYPES_URL = [
  "https://api.apiose188.com/pks/getLotteryPksInfo.do?lotCode=10057",
  "https://api.apiose188.com/pks/getLotteryPksInfo.do?lotCode=10037",
  "https://api.apiose188.com/pks/getLotteryPksInfo.do?lotCode=10037",
  "https://api.apiose188.com/pks/getLotteryPksInfo.do?lotCode=10057",
  "https://api.apiose188.com/pks/getLotteryPksInfo.do?lotCode=10035",
];

const USER_SEND_MSG = 1 // user send the message
const ADMIN_SEND_MSG = 2 // admin send the message
const SUPERADMIN_SEND_MSG = 3 // super admin send the message

module.exports = {
  GAME_TYPES_URL,
  RES_STATUS_ERROR,
  RES_STATUS_SUCCESS,
  RES_STATUS_ALREADY_USE,
  RES_STATUS_UNAUTHORIZED,
  RES_STATUS_BAD_REQUEST,
  RES_STATUS_NOT_FOUND,
  RES_STATUS_SERVER_ERROR,
  RES_MSG_ERROR,
  RES_MSG_INVALID_PASSWORD,
  RES_MSG_NO_TOKEN,
  RES_MSG_REQUIRE_ROLE,
  RES_MSG_SERVER_ERROR,
  RES_MSG_UNABLE_VALIDATE_ROLE,
  RES_MSG_UNAUTHORIZED,
  RES_MSG_USER_NOT_FOUND,
  RES_MSG_AREADY_USE,
  RES_MSG_INVALID_ROOMNUMBER,
  RES_MSG_NOT_FOUND_ROOM,
  RES_MSG_NOT_ALLOWED_ROOM,
  USER_SEND_MSG,
  ADMIN_SEND_MSG,
  SUPERADMIN_SEND_MSG,
};
