import Dialogs from "./Components/Dialogs/Dialogs";
import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";

import Settings from "./Components/settings/settings";
import News from "./Components/news/news";
import Music from "./Components/music/music";
import FriendBar from "./Components/Friends/Friends";
import UsersContainer from "./Components/Find-Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavBar state={props.state.friendState} />

      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" element={<Dialogs store={props.state} />} />
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/UsersContainer" element={<UsersContainer />} />
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
