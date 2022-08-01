import { store } from "./redux/State";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );
};
renderApp(store.getState());
store.subscribe(renderApp);
