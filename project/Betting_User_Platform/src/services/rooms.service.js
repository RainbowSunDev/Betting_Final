import { API_URL } from "../config/constants.js";

const getRoomList = async () => {
  const requestOptions = {
    method: "GET",
  };

  const res = await fetch(`${API_URL}/rooms`, requestOptions);
  return res;
};

const checkRoom = async (roomData) => {
  const token = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).authState
  ).userToken;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", token: token },
    body: JSON.stringify(roomData),
  };

  const res = await fetch(`${API_URL}/room/checkRoomUser`, requestOptions);
  return res;
};
export const roomService = {
  getRoomList,
  checkRoom,
};
