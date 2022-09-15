import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

import { loginOutThunkCreator } from "../../redux/reducers/authReducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authUser.isAuth,
  login: state.authUser.logim,
});

export default connect(mapStateToProps, {
  loginOutThunkCreator,
})(HeaderContainer);
