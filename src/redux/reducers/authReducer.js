const SET_USER = "SET_USER";
const REMOVE_USER = "REMOVE_USER";

let inicialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = inicialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const addUser = (userId, email, login) => ({
  type: SET_USER,
  data: { userId, email, login },
});
export const removeUser = (userId) => ({
  type: REMOVE_USER,
  userId,
});

export default authReducer;
