const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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

export default profileReducer;
