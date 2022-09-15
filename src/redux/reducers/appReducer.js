// import { getAuthMe } from "../../API/API";
// import { stopSubmit } from "redux-form";
import { getAuthMeThunkCreator } from "./authReducer";

const INICIALAIZED = "INICIALAIZED";

let inicialState = {
  inicialaized: false,
};

const appReducer = (state = inicialState, action) => {
  switch (action.type) {
    case INICIALAIZED:
      return {
        ...state,
        inicialaized: true,
      };

    default:
      return state;
  }
};

export const inicialaizedApp = () => ({
  type: INICIALAIZED,
});

export const inicialaizedThunkCreator = () => (dispatch) => {
  let promise = dispatch(getAuthMeThunkCreator());
  Promise.all([promise]).then(() => {
    dispatch(inicialaizedApp());
  });
};

export default appReducer;
