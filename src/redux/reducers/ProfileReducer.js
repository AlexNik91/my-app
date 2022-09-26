import { profileAPI } from "../../API/API";

const ADD_POST = "profileReducer/ADD-POST";

const SET_USER_PROFILE = "profileReducer/SET_USER_PROFILE";
const SET_STATUS = "profileReducer/SET_STATUS";
const UDATE_STATUS = "profileReducer/UDATE_STATUS";
const DELITE_POST = "profileReducer/DELITE_POST";

let inicialState = {
  postsData: [
    { lekesKount: 11, id: 1, messages: "Its my first post" },
    { lekesKount: 12, id: 2, messages: "Its my new post" },
    { lekesKount: 3, id: 3, messages: "Its my next post" },
    { lekesKount: 4, id: 4, messages: "Its my thers post" },
    { lekesKount: 1, id: 5, messages: "Its my big post" },
    { lekesKount: 7, id: 6, messages: "Its my bang post" },
  ],

  profile: null,
  status: "",
};

const profileReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = action.addNewPostText;

      return {
        ...state,

        postsData: [
          ...state.postsData,
          { id: 7, messages: newPost, lekesKount: 0 },
        ],
      };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case SET_STATUS:
      return { ...state, status: action.status };

    case UDATE_STATUS:
      return { ...state, status: action.status };
    case DELITE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id != action.postId),
      };

    default:
      return state;
  }
};

export const addPost = (addNewPostText) => {
  return {
    type: ADD_POST,
    addNewPostText,
  };
};
export const delitePost = (postId) => {
  return {
    type: DELITE_POST,
    postId,
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

export const getProfileThunkCreator = (userId) => async (dispatch) => {
  let data = await profileAPI.usersProfile(userId);
  dispatch(setUsersProfile(data));
};

export const getStatusThunkCreator = (userId) => async (dispatch) => {
  let respons = await profileAPI.getUsersProfileStatus(userId);
  dispatch(setStatus(respons.data));
};

export const getUpdateStatusThunkCreator = (status) => async (dispatch) => {
  let respons = await profileAPI.updateUsersProfileStatus(status);
  if (respons.data.resultCode === 0) {
    dispatch(
      updateStatus(respons.status == 200 ? inicialState.status : respons.status)
    );
  }
};

export default profileReducer;
