const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const addPostChangeActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
