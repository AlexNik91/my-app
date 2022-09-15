import * as axios from "axios";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "cb6a2295-2627-4c12-887a-0d93de776ba6",
  },
});

export const usersAPI = {
  user(curentPage, pageSize) {
    return instance
      .get(`users?page=${curentPage}&count=${pageSize}`, {})
      .then((respons) => {
        return respons.data;
      });
  },

  usersFollow(userId) {
    return instance.post(`follow/${userId}`, {}).then((respons) => {
      return respons.data;
    });
  },

  usersUnfollow(userId) {
    return instance.delete(`follow/${userId}`, {}).then((respons) => {
      return respons.data;
    });
  },
};

export const profileAPI = {
  usersProfile(userId) {
    return instance.get(`profile/${userId}`).then((respons) => {
      return respons.data;
    });
  },
  getUsersProfileStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateUsersProfileStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },
};

export const getAuthMe = {
  authMe() {
    return instance.get(`auth/me`).then((respons) => {
      return respons.data;
    });
  },
  login(email, password, rememberMe = false, captcha) {
    return instance
      .post(`/auth/login`, { email, password, rememberMe, captcha })
      .then((respons) => {
        return respons.data;
      });
  },
  loginOut() {
    return instance.delete(`/auth/login`).then((respons) => {
      return respons.data;
    });
  },
  captcha() {
    return instance.get(`/security/get-captcha-url`).then((respons) => {
      return respons.data;
    });
  },
};
