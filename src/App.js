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

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />

      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" element={<Dialogs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
