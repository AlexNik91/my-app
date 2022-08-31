import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

import { addUser } from "../../redux/reducers/authReducer";
import { getAuthMe } from "../../API/API";

class HeaderContainer extends React.Component {
  componentDidMount() {
    getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.addUser(id, email, login);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authUser.isAuth,
  login: state.authUser.logim,
});

export default connect(mapStateToProps, { addUser })(HeaderContainer);
