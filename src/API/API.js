import * as axios from "axios";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "cb6a2295-2627-4c12-887a-0d93de776ba6",
  },
});

export const getUsers = (curentPage, pageSize) => {
  return instance
    .get(`users?page=${curentPage}&count=${pageSize}`, {})
    .then((respons) => {
      return respons.data;
    });
};

export const getUsersFollow = (userId) => {
  return instance.post(`follow/${userId}`, {}).then((respons) => {
    return respons.data;
  });
};

export const getUsersUnfollow = (userId) => {
  return instance.delete(`follow/${userId}`, {}).then((respons) => {
    return respons.data;
  });
};

export const getUsersProfile = (userId) => {
  return instance.get(`profile/${userId}`).then((respons) => {
    return respons.data;
  });
};

export const getAuthMe = () => {
  return instance.get(`auth/me`).then((respons) => {
    return respons.data;
  });
};
