let store = {
  _state: {
    postState: {
      postsData: [
        { lekesKount: 11, id: 1, messages: "Its my first post" },
        { lekesKount: 12, id: 2, messages: "Its my new post" },
        { lekesKount: 3, id: 3, messages: "Its my next post" },
        { lekesKount: 4, id: 4, messages: "Its my thers post" },
        { lekesKount: 1, id: 5, messages: "Its my big post" },
        { lekesKount: 7, id: 6, messages: "Its my bang post" },
      ],
      newPostText: "sadad",
    },
    dialogState: {
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
      imgData: [
        {
          name: "San9",
          img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
        },
        {
          name: "Van9",
          img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
        },
        {
          name: "Pet9",
          img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
        },
      ],
      newMessageText: " ",
    },
  },
  getState() {
    debugger;
    return this._state;
  },
  renderApp() {
    console.log("state chenged");
  },
  addPost() {
    let newPost = {
      id: 7,
      messages: this._state.postState.newPostText,
      lekesKount: 0,
    };
    this._state.postState.postsData.push(newPost);
    this._state.postState.newPostText = "";
    this._renderApp(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 7,
      message: this._state.dialogState.newMessageText,
    };
    this._state.dialogState.messageData.push(newMessage);
    this._state.dialogState.newMessageText = "";
    this._renderApp(this._state);
  },
  messageChange(newText) {
    this._state.dialogState.newMessageText = newText;

    this._renderApp(this._state);
  },
  updateNewPostText(newText) {
    this._state.postState.newPostText = newText;
    this._renderApp(this._state);
  },
  subscribe(observer) {
    this._renderApp = observer;
  },
};

export default store;

window.store = store;
