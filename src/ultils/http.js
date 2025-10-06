import axios from "axios";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 10000,
});

const _send = async (method, pathname, data, config) => {
  let response = null;
  try {
    response = await httpClient.request({
      method,
      url: pathname,
      data,
      ...config,
    });
  } catch (e) {
    console.log(e);

    return {
      success: false,
      status: e.response?.status || null,
      message: e.response?.data?.message || e.message,
    };
  }
  return response.data.data;
};

const get = async (pathname, config) => {
  return await _send("get", pathname, null, config);
};

const post = async (pathname, data, config) => {
  return await _send("post", pathname, data, config);
};

const put = async (pathname, data, config) => {
  return await _send("put", pathname, data, config);
};

const del = async (pathname, config) => {
  return await _send("delete", pathname, null, config);
};

const patch = async (pathname, data, config) => {
  return await _send("patch", pathname, data, config);
};

const http = { get, post, put, del, patch };

export default http;