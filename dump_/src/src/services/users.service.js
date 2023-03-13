import { API_BASE } from "../config/constants.js";

const login = async (userdata) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userdata),
  };

  const res = await fetch(`${API_BASE}/auth/login`, requestOptions);
  return res;
};

const logout = () => {
  localStorage.removeItem("persist:auth");
};

const registerUser = async (user) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    },
    body: JSON.stringify(user),
  };

  const res = await fetch(`${API_BASE}/auth/register`, requestOptions);
  return res;
};

export const userService = {
  login,
  logout,
  registerUser,
};
