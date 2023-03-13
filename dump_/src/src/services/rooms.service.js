import { API_BASE } from "../config/constants.js";

const getRoomList = async () => {
  const requestOptions = {
    method: "GET",
  };

  const res = await fetch(`${API_BASE}/rooms`, requestOptions);
  return res;
};

const checkRoom = async (roomData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(roomData),
  };

  const res = await fetch(`${API_BASE}/rooms/check`, requestOptions);
  return res;
};
export const roomService = {
  getRoomList,
  checkRoom,
};
