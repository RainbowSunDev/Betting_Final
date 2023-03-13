import { API_URL } from "../config/constants.js";

const getLotteriesInfo = async () => {
  const requestOptions = {
    method: "GET",
  };

  const res = await fetch(`${API_URL}/lotteries`, requestOptions);
  return res;
};

export const lotteriesService = {
  getLotteriesInfo,
};
