import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import authReducer from "./reducers/authReducer";
import dialogsReducer from "./reducers/DialogsReducer";
import friendReducer from "./reducers/friendReducer";
import profileReducer from "./reducers/ProfileReducer";
import UsersReducer from "./reducers/UsersReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./reducers/appReducer";

let reducers = combineReducers({
  postState: profileReducer,
  dialogState: dialogsReducer,
  friendState: friendReducer,
  usersState: UsersReducer,
  authUser: authReducer,
  form: formReducer,
  app: appReducer,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
