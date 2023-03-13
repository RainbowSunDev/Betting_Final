const DEV_MODE = true;
export const API_BASE = DEV_MODE == true ? "http://43.139.177.14:19007/api" : "";
export const API_URL = DEV_MODE == true ? "http://43.139.177.14:19007/" : "";

export const IMG_URL =
  DEV_MODE == true ? "http://43.139.177.14:19007/images/User" : "";

export const LOTTERY_INFO_URL1 =
  "https://api.apiose188.com/pks/getLotteryPksInfo.do?lotCode=10057";

export const LOTTERY_INFO_URL2 =
  "https://api.apiose188.com/pks/getLotteryPksInfo.do?lotCode=10037";

export const LOTTERY_INFO_URL3 =
  "https://api.apiose188.com/pks/getLotteryPksInfo.do?lotCode=10037";
export const LOTTERY_INFO_URL4 =
  "https://api.apiose188.com/pks/getLotteryPksInfo.do?lotCode=10057";
export const LOTTERY_INFO_URL5 =
  "https://api.apiose188.com/pks/getLotteryPksInfo.do?lotCode=10035";


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

export const ARRYA_ERROR_MSG = [
  "错误",
  "无效的密码",
  "的和县",
  "需要角色",
  "服务器错误",
  "无法验证角色",
  "未经授权",
  "找不到用户",
  "用户已经存在",
  "房间号无效",
  "找不到房间",
];
