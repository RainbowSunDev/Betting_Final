import { io } from "socket.io-client";
import { API_BASE } from "../config/constants";

export const socket = io(API_BASE, { autoConnect: false });
