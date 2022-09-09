import { profileAPI } from "../../API/API";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const UDATE_STATUS = "UDATE_STATUS";

let inicialState = {
  postsData: [
    { lekesKount: 11, id: 1, messages: "Its my first post" },
    { lekesKount: 12, id: 2, messages: "Its my new post" },
    { lekesKount: 3, id: 3, messages: "Its my next post" },
    { lekesKount: 4, id: 4, messages: "Its my thers post" },
    { lekesKount: 1, id: 5, messages: "Its my big post" },
    { lekesKount: 7, id: 6, messages: "Its my bang post" },
  ],
  newPostText: "bll ui",
  profile: null,
  status: "",
};

const profileReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = state.newPostText;

      return {
        ...state,
        newPostText: "",
        postsData: [
          ...state.postsData,
          { id: 7, messages: newPost, lekesKount: 0 },
        ],
      };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case SET_STATUS:
      return { ...state, status: action.status };

    case UDATE_STATUS:
      return { ...state, status: action.status };

    default:
      return state;
  }
};

export const addPost = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostText = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export const setUsersProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status: status,
  };
};
export const updateStatus = (status) => {
  return {
    type: UDATE_STATUS,
    status: status,
  };
};

export const getProfileThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.usersProfile(userId).then((data) => {
      dispatch(setUsersProfile(data));
    });
  };
};

export const getStatusThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.getUsersProfileStatus(userId).then((respons) => {
      dispatch(setStatus(respons.data));
    });
  };
};

export const getUpdateStatusThunkCreator = (status) => {
  return (dispatch) => {
    profileAPI.updateUsersProfileStatus(status).then((respons) => {
      if (respons.data.resultCode === 0) {
        dispatch(
          updateStatus(
            respons.status == 200 ? inicialState.status : respons.status
          )
        );
      }
    });
  };
};

export default profileReducer;
