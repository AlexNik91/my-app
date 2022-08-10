import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./reducers/DialogsReducer";
import friendReducer from "./reducers/friendReducer";
import profileReducer from "./reducers/ProfileReducer";
import UsersReducer from "./reducers/UsersReducer";

let reducers = combineReducers({
  postState: profileReducer,
  dialogState: dialogsReducer,
  friendState: friendReducer,
  usersState: UsersReducer,
});

export let store = createStore(reducers);

window.store = store;

export default store;
