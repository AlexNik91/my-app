import { getAuthMe } from "../../API/API";
import { stopSubmit } from "redux-form";

const SET_USER = "SET_USER";
const SET_CAPTCHA = "SET_CAPTCHA";

let inicialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null,
};

const authReducer = (state = inicialState, action) => {
  switch (action.type) {
    case SET_USER:
    case SET_CAPTCHA:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

export const addUser = (userId, email, login, isAuth, captcha) => ({
  type: SET_USER,
  data: { userId, email, login, isAuth, captcha },
});
export const getCaptha = (captcha) => ({
  type: SET_CAPTCHA,
  data: { captcha },
});

export const getAuthMeThunkCreator = () => (dispatch) => {
  return getAuthMe.authMe().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(addUser(id, email, login, true));
    }
  });
};

export const loginThunkCreator = (email, password, rememberMe, captcha) => {
  return (dispatch) => {
    getAuthMe.login(email, password, rememberMe, captcha).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthMeThunkCreator());
      } else {
        if (data.resultCode === 10) {
          dispatch(captchaThunkCreator());
        }
        let messages =
          data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(
          stopSubmit("login", {
            _error: messages,
          })
        );
      }
    });
  };
};

export const loginOutThunkCreator = () => {
  return (dispatch) => {
    getAuthMe.loginOut().then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthMeThunkCreator(null, null, null, false));
      }
    });
  };
};
export const captchaThunkCreator = () => {
  return (dispatch) => {
    getAuthMe.captcha().then((data) => {
      let url = data.url;
      dispatch(getCaptha(url));
    });
  };
};

export default authReducer;
