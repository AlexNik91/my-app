import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./reducers/DialogsReducer";
import friendReducer from "./reducers/friendReducer";
import profileReducer from "./reducers/ProfileReducer";

let reducers = combineReducers({
  postState: profileReducer,
  dialogState: dialogsReducer,
  friendState: friendReducer,
});

export let store = createStore(reducers);

export default store;
