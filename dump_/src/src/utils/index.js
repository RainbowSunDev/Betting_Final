import {
  RES_STATUS_ALREADY_USE,
  RES_STATUS_BAD_REQUEST,
  RES_STATUS_ERROR,
  RES_STATUS_NOT_FOUND,
  RES_STATUS_SERVER_ERROR,
  RES_STATUS_SUCCESS,
  RES_STATUS_UNAUTHORIZED,
} from "../config/constants";

export const authHeader = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return {
      Authorization: "Bearer " + user.token,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    };
  } else {
    return {};
  }
};

export const checkResponse = async (response) => {
  const res = await response.json();
  if (response.ok) return { status: RES_STATUS_SUCCESS, data: res && res };

  switch (response.status) {
    case 400:
      return {
        status: RES_STATUS_ALREADY_USE,
        msg: res && res.message,
      };
    case 401:
      return {
        status: RES_STATUS_UNAUTHORIZED,
        msg: res && res.message,
      };
    case 403:
      return {
        status: RES_STATUS_BAD_REQUEST,
        msg: res && res.message,
      };
    case 404:
      return {
        status: RES_STATUS_NOT_FOUND,
        msg: res && res.message,
      };
    case 500:
      return {
        status: RES_STATUS_SERVER_ERROR,
        msg: res && res.message,
      };
    default:
      return {
        status: RES_STATUS_ERROR,
        msg: res && res.message,
      };
  }
};
