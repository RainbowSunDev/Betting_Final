import { API_BASE } from "../config/constants.js";

const getLotteriesInfo = async (url) => {
  const requestOptions = {
    method: "GET",
  };

  const res = await fetch(`${url}`, requestOptions);
  return res;
};

export const lotteriesService = {
  getLotteriesInfo,
};
