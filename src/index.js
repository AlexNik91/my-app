import { store } from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App state={state} />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
renderApp(store.getState());
