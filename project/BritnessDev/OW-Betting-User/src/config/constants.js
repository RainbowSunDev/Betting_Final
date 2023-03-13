const DEV_MODE = true;
export const API_BASE = DEV_MODE == true ? "http://192.168.125.106:4000" : "";

export const API_URL = DEV_MODE == true ? `${API_BASE}/api/v1` : "";

export const IMG_URL = DEV_MODE == true ? `${API_BASE}/images/user` : "";
export const ROOM_IMG_URL = DEV_MODE == true ? `${API_BASE}/images/room` : "";
export const AVATAR_URL = DEV_MODE == true ? `${API_BASE}/images/avatar` : "";

export const SOCKET_JOIN_ROOM = "join_room";

export const SOCKET_CHAT_GET_DATA = "c/0";
export const SOCKET_CHAT_JOIN_ROOM = "c/1";
export const SOCKET_CHAT_SEND_MESSAGE = "c/2";
export const SOCKET_CHAT_RECEIVED_MESSAGE = "c/3";
export const SOCKET_CHAT_SENT = "c/4";

export const USER_SEND_MSG = 1; // user send the message
export const ADMIN_SEND_MSG = 2; // admin send the message
export const SUPERADMIN_SEND_MSG = 3; // super admin send the message

export const SOCKET_BET_GET_DATA = "b/0";
export const SOCKET_BET_BET = "b/1";
export const SOCKET_BET_JOIN_ROOM = "b/2";
export const SOCKET_BET_USER_LOG = "b/3";
export const SOCKET_BET_BLOCKING_EVENT = "b/4";
export const SOCKET_LOTTERY_STATISTICS = "b/5";
export const SOCKET_BET_WARNING_EVENT = "b/6";
export const SOCKET_BET_DRWAING_EVENT = "b/7";
export const SOCKET_BET_NEWTURN_EVENT = "b/8";
export const SOCKET_RECENT_LOTTERY_RESULT = "b/9";
export const SOCKET_BET_NEWTURN_EVENT1 = "b/10";
export const SOCKET_BET_WARNING_EVENT1 = "b/11";
export const SOCKET_BET_DRWAING_EVENT1 = "b/12";
export const SOCKET_BET_BLOCKING_EVENT1 = "b/13";

export const RES_STATUS_ERROR = 0; // other errors
export const RES_STATUS_SUCCESS = 1; // 200
export const RES_STATUS_ALREADY_USE = 2; // 400
export const RES_STATUS_UNAUTHORIZED = 3; //401
export const RES_STATUS_BAD_REQUEST = 4; //403
export const RES_STATUS_NOT_FOUND = 5; //404
export const RES_STATUS_SERVER_ERROR = 6; //500

export const LoadingMessage = "正在加载";
export const EMPTY_INPUT = "填写字段";
export const REGISTER_FAILED = "注册失败";
export const REGISTER_SUCCESS = "注册成功";
export const INCORRECT_CAPTCHA = "验证码不正确";
export const NO_MATCH_CONFIRM = "与确认不匹配";
export const INPUT_BET_AMOUNT = "请输入下注金额!";
export const INVALID_BET_CODE = "请选择正确下注";
export const SUCCESS_BET = "下注成功!";
export const BLOCKING_TIME = "阻塞时间";

export const RES_MSG_ERROR = 0; // error
export const RES_MSG_INVALID_PASSWORD = 1; //invalid password
export const RES_MSG_NO_TOKEN = 2; // no token provide
export const RES_MSG_REQUIRE_ROLE = 3; // require role
export const RES_MSG_SERVER_ERROR = 4; // server error
export const RES_MSG_UNABLE_VALIDATE_ROLE = 5; // no valide role
export const RES_MSG_UNAUTHORIZED = 6; // unauthorized
export const RES_MSG_USER_NOT_FOUND = 7; //user not found
export const RES_MSG_AREADY_USE = 8; // already user exist
export const RES_MSG_INVALID_ROOMNUMBER = 9; // invalid room number
export const RES_MSG_NOT_FOUND_ROOM = 10; // not found room
export const RES_MSG_NOT_ALLOWED_ROOM = 11; // not allowed room for user

export const ARRYA_ERROR_MSG = [
  "错误", //0
  "无效的密码",
  "的和县",
  "需要角色",
  "服务器错误",
  "无法验证角色", //5
  "未经授权",
  "找不到用户",
  "用户已经存在",
  "房间号无效",
  "找不到房间", //10
  "这个房间不允许",
];
