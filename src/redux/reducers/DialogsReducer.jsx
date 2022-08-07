const ADD_MESSAGE = "ADD-MESSAGE";
const MESSAGE_CHEINGE = "MESSAGE-CHEINGE";

let inicialState = {
  messageData: [
    { id: 1, message: "Hi PeT9" },
    { id: 2, message: "Hi San9" },
    { id: 3, message: "Hi Van9" },
    { id: 4, message: "Hi Tan9" },
    { id: 5, message: "Hi Gal9" },
    { id: 6, message: "Hi Ol9" },
  ],
  dialogsData: [
    {
      img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
      id: 1,
      name: "PeT9",
    },
    {
      img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
      id: 2,
      name: "San9",
    },
    {
      img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
      id: 3,
      name: "Van9",
    },
    {
      img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
      id: 4,
      name: "Tan9",
    },
    {
      img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
      id: 5,
      name: "Gal9",
    },
    {
      img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
      id: 6,
      name: "Ol9",
    },
  ],

  newMessageText: " ",
};

const dialogsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        messageData: [...state.messageData, { id: 7, message: newMessage }],
      };

    case MESSAGE_CHEINGE:
      return { ...state, newMessageText: action.newText };

    default:
      return state;
  }
};
export const actionAddMessage = () => {
  return {
    type: ADD_MESSAGE,
  };
};
export const actionOnMessageChange = (text) => {
  return {
    type: MESSAGE_CHEINGE,
    newText: text,
  };
};
export default dialogsReducer;
