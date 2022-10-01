import Dialogs from "./Components/Dialogs/Dialogs";
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Settings from "./Components/settings/settings";
import NewsContainer from "./Components/news/newsContainer";
import Music from "./Components/music/music";
import FriendBar from "./Components/Friends/Friends";
import UsersContainer from "./Components/Find-Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Header/authUser/login";
import { connect } from "react-redux";
import { inicialaizedThunkCreator } from "./redux/reducers/appReducer";
import getAuthMeThunkCreator from "./redux/reducers/authReducer";
import IsLoader from "./Components/commen/commenFile/loader";
import { compose } from "redux";
import withRouter from "./Components/Profile/HookProfileContainer";
import NavBarContainer from "./Components/NavBar/NavBarContainer";

import DialogsMessage from "./Components/Dialogs/DialogItem/DialogsUserContainer";

class App extends React.Component {
  componentDidMount() {
    this.props.inicialaizedThunkCreator();
  }

  render() {
    if (!this.props.inicialaized) {
      return <IsLoader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBarContainer
        // state={this.props.state.friendState}
        // id={this.props.state.friendState}
        />

        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs"
              element={<Dialogs store={this.props.state} />}
            />
            <Route
              path="/dialogs/:userId"
              element={<DialogsMessage store={this.props.state} />}
            />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/news" element={<NewsContainer />} />
            <Route path="/UsersContainer" element={<UsersContainer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/music" element={<Music />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/Friends"
              element={<FriendBar state={this.props.state.friendState} />}
            />
          </Routes>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  inicialaized: state.app.inicialaized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    inicialaizedThunkCreator,
    getAuthMeThunkCreator,
  })
)(App);
