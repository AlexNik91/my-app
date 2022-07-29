import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import {
  addPost,
  updateNewPostText,
  addMessage,
  messageChange,
} from "./redux/State.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const renderApp = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          addMessage={addMessage}
          messageChange={messageChange}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};
export default renderApp;
