import Dialogs from "./Components/Dialogs/Dialogs";
import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/settings/settings";
import News from "./Components/news/news";
import Music from "./Components/music/music";
import FriendBar from "./Components/Friends/Friends";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar state={props.state.friendState} />

      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs"
            element={<Dialogs store={props.state} dispatch={props.dispatch} />}
          />
          <Route
            path="/profile"
            element={<Profile store={props.state} dispatch={props.dispatch} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/music" element={<Music />} />
          <Route
            path="/Friends"
            element={<FriendBar state={props.state.friendState} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
