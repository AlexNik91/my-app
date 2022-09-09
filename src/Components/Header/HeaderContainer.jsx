import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

import {
  addUser,
  getAuthMeThunkCreator,
} from "../../redux/reducers/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthMeThunkCreator();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authUser.isAuth,
  login: state.authUser.logim,
});

export default connect(mapStateToProps, { addUser, getAuthMeThunkCreator })(
  HeaderContainer
);
