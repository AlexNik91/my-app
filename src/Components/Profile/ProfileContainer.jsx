import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";

import { setUsersProfile } from "../../redux/reducers/ProfileReducer";
import withRouter from "./HookProfileContainer";
import { getUsersProfile } from "../../API/API";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;

    getUsersProfile(userId).then((data) => {
      this.props.setUsersProfile(data);
    });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({ profile: state.postState.profile });

export default connect(mapStateToProps, { setUsersProfile })(
  withRouter(ProfileContainer)
);
